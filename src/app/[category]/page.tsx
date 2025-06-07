import { getAllCategories, getPostMetasByCategory } from "@/lib/postDataUtils";
import Container from "@/components/layouts/Container";
import { CategoryProps } from "@/config/types";
import PostList from "@/components/postLists/PostList";
import PageTitle from "@/components/layouts/PageTitle";
import { Metadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
    const categories = getAllCategories();
    return categories.map((category) => ({category}));
}

export async function generateMetadata({params}: {params: CategoryProps}): Promise<Metadata> {
    const {category} = await params;
    return {
        title: category,
    }
}


export default async function PostPage({params}: {params: CategoryProps}) {
    const { category } = await params;

    const sortedPosts = await getPostMetasByCategory(category);

    return (
        <Container>
            <PageTitle>{category.charAt(0).toUpperCase()+category.slice(1)} Posts</PageTitle>
            <PostList posts={sortedPosts} />
        </Container>
    )
}