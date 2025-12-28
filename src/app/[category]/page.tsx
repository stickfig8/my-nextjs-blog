import { getAllCategories, getFirstTagsByCategory, getPostMetasByCategory } from "@/lib/postDataUtils";
import Container from "@/components/layouts/Container";
import { CategoryProps } from "@/config/types";
import PageTitle from "@/components/layouts/PageTitle";
import { Metadata } from "next";
import SubCategoryList from "@/components/postLists/SubCategoryList";
import PostList from "@/components/postLists/PostList";
import Pagenation from "@/components/postLists/Pagenation";
import { PAGE_SIZE } from "@/config/commonConfigs";
import { normalizePageSearchParam, paginate } from "@/lib/pageUtils";

export const dynamicParams = false;

export function generateStaticParams() {
    const categories = getAllCategories();
    return categories.map((category) => ({category}));
}

export async function generateMetadata({params}: {params: CategoryProps}): Promise<Metadata> {
    const {category} = await params;
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

    return {
        title: `${categoryName}`,
        openGraph: {
            title: `${categoryName} | Hyeongyu's blog`,
            description: `${categoryName} post list`,
            images: ['/assets/blog_thumbnail.jpg'],
            type: "article"
        },
        twitter: {
            card: 'summary_large_image',
            title: `${categoryName} | Hyeongyu's blog`,
            description: `${categoryName} post list`,
            images: ['/assets/blog_thumbnail.jpg'],
        }
    }
}


export default async function PostPage({params, searchParams}: { params: CategoryProps;
    searchParams?: Promise<{page?: number}>;}) {
    
    const { category } = await params;
    const resolved = (await searchParams) || {};

    const sortedPosts = await getPostMetasByCategory(category);
    const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);

    const page = normalizePageSearchParam(resolved, totalPages);

    const pagedPosts = paginate(sortedPosts, page, 6);

    const subCategory = getFirstTagsByCategory(category);

    return (
        <Container>
            <PageTitle>{category.charAt(0).toUpperCase()+category.slice(1)} Posts</PageTitle>
            <SubCategoryList subCategory={subCategory} />
            <PostList posts={pagedPosts} />
            <Pagenation currentPage={page} totalPages={totalPages} />
        </Container>
    )
}