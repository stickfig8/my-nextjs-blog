import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { PostIdentifier, PostMeta, PostMetaWithCategory, Heading, PostData } from "@/config/types";
import { FEATURED_POSTS } from "../config/featured";

const postDirectory = path.join(process.cwd(), 'posts');

function getPostFilePath(category: string, postName: string): string {
    return path.join(postDirectory, category, postName, 'content.mdx');
}

function parsePostFile(filePath: string) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return matter(fileContent);
}

export function getPostData(category: string, postName: string):PostData {
    const filePath = getPostFilePath(category, postName);
    const {data, content} = parsePostFile(filePath);

    return {
        meta: data as PostMeta,
        content,
    }
}

export function getPostMeta(category: string, postName: string):PostMeta | null {
    const filePath = getPostFilePath(category, postName);
    if(!fs.existsSync(filePath)) return null;
    const {data} = parsePostFile(filePath);
    return {
        slug: postName,
        ...(data as Omit<PostMeta, 'slug'>),
    };
}

export function getPostMetasByCategory(category: string): PostMetaWithCategory[] {
    const categoryDir = path.join(postDirectory, category)
    if(!fs.existsSync(categoryDir)) return [];

    const postNames = fs.readdirSync(categoryDir);
    const posts = postNames.map((postName) => {
        const meta = getPostMeta(category, postName);
        if(!meta) return null;
        return {...meta, category};
    }).filter(Boolean) as PostMetaWithCategory[];
    
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllSlugs(): PostIdentifier[] { // generateStaticParams 전용
    const categories = fs.readdirSync(postDirectory);
    return categories.flatMap((category) => { // 카테고리별 분류 해제
        const categoryDir = path.join(postDirectory, category);
        const slugs = fs.readdirSync(categoryDir);
        return slugs.map((slug) => {return {category, slug}});
    });
}

export function getAllCategories(): string[] {
    const categories = fs.readdirSync(postDirectory);

    return categories;
}

export function getAllTags():Record<string, number> { //Record객체 반환
    const slugs: PostIdentifier[] = getAllSlugs();
    const tagMap: Record<string, number> = {};

    slugs.forEach(({category, slug}) => {
        const meta = getPostMeta(category, slug);
        if(!meta || !meta.tags) return {};

        meta.tags.forEach((tag) => {
            tagMap[tag] = (tagMap[tag] ?? 0) + 1;
        });
    })

    return tagMap;
}

export function getLatestPostMetas(count: number): PostMetaWithCategory[] {
    const slugs = getAllSlugs();
    const allPosts = slugs
    .map(({category, slug}) => {
        const meta = getPostMeta(category, slug);
        if (!meta) return null;
        return {...meta, category};
    }).filter(Boolean) as PostMetaWithCategory[];
    
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return sortedPosts.slice(0, count);
}

export function getPostMetasByTag(tag: string): PostMetaWithCategory[] {
    const slugs = getAllSlugs();

    const posts = slugs.map(({category, slug}) => {
        const meta = getPostMeta(category, slug);
        if(!meta || !meta.tags?.includes(tag)) return null;

        return {
            ...meta,
            category
        }
    }).filter(Boolean) as PostMetaWithCategory[];

    return posts;
}

export function extractHeadingsFromMDX(mdxContent: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.*)$/gm;

  const headings: Heading[] = [];

  let match;
  while ((match = headingRegex.exec(mdxContent)) !== null) {
    const level = match[1].length; // ## -> 2, ### -> 3
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w가-힣\s-]/g, '') // 특수문자 제거
      .replace(/\s+/g, '-')         // 공백 -> 하이픈
      .replace(/-+/g, '-');         // 중복 하이픈 제거

    headings.push({ level, text, id });
  }

  return headings;
}

export function getFeaturedPosts(): PostMetaWithCategory[] {
    const featuredList = FEATURED_POSTS;
    return featuredList
        .map(({ category, slug }) => {
        const meta = getPostMeta(category, slug);
        return meta ? { ...meta, category } : null;
        })
        .filter(Boolean) as PostMetaWithCategory[];
}

export function getAllPostMetas() : PostMeta[] {
    const slugs = getAllSlugs();
    const postMetas = slugs.map((slug) => {
        const meta = getPostMeta(slug.category, slug.slug);
        return meta;
    }).filter(Boolean) as PostMeta[];

    return postMetas;
}