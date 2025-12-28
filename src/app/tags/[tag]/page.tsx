import { TagProps } from "@/config/types";
import { getAllTags, getPostMetasByTag } from "@/lib/postDataUtils";
import Container from "@/components/layouts/Container";
import PostList from "@/components/postLists/PostList";
import { PAGE_SIZE } from "@/config/commonConfigs";
import { normalizePageSearchParam, paginate } from "@/lib/pageUtils";
import Pagenation from "@/components/postLists/Pagenation";

export const dynamicParams = false;

export function generateStaticParams() {
    const tags = Object.keys(getAllTags());
    return tags.map((tag) => {return {tag}}); // generateStaticParams()는 key + value형식의 객체 형태를 요구
}

export async function generateMetadata({params}: {params: TagProps}) {
    const {tag} = await params;
    return {
        title: `#${tag}`,
        openGraph: {
            title: `#${tag} | Hyeongyu's blog`,
            description: `#${tag} tag list`,
            images: ['/assets/blog_thumbnail.jpg'],
            type: "article"
        },
        twitter: {
            card: 'summary_large_image',
            title: `#${tag} Tags | Hyeongyu's blog`,
            description: `#${tag} post list`,
            images: ['/assets/blog_thumbnail.jpg'],
        }
    }
}

export default async function TagPage({params, searchParams}: {params: TagProps, searchParams?: Promise<{page?: number}>;}) {
    const {tag} = await params;
    const resolved = (await searchParams) || {};

    const sortedPosts = getPostMetasByTag(tag);
    const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
    
    const page = normalizePageSearchParam(resolved, totalPages);
    
    const pagedPosts = paginate(sortedPosts, page, 6);

    return(
        <Container>
            <h1 className="text-3xl font-bold mb-6">#{tag}</h1>
            <PostList posts={pagedPosts} />
            <Pagenation currentPage={page} totalPages={totalPages} />
        </Container>
    )
}