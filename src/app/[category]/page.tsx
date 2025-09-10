import { getAllCategories, getFirstTagsByCategory, getPostMetasByCategory } from "@/lib/postDataUtils";
import Container from "@/components/layouts/Container";
import { CategoryProps } from "@/config/types";
import PostList from "@/components/postLists/PostList";
import PageTitle from "@/components/layouts/PageTitle";
import { Metadata } from "next";
import SubCategoryList from "@/components/postLists/SubCategoryList";

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


export default async function PostPage({params}: {params: CategoryProps}) {
    
    const { category } = await params;
    const subCategory = getFirstTagsByCategory(category);
    const sortedPosts = await getPostMetasByCategory(category);

    return (
        <Container>
            <PageTitle>{category.charAt(0).toUpperCase()+category.slice(1)} Posts</PageTitle>
            <SubCategoryList subCategory={subCategory} />
            <PostList posts={sortedPosts} />
        </Container>
    )
}