import { TagProps } from "@/config/types";
import { getAllTags, getPostMetasByTag } from "@/lib/postDataUtils";
import Container from "@/components/layouts/Container";
import PostList from "@/components/postLists/PostList";

export const dynamicParams = false;

export function generateStaticParams() {
    const tags = Object.keys(getAllTags());
    return tags.map((tag) => {return {tag}}); // generateStaticParams()는 key + value형식의 객체 형태를 요구
}

export async function generateMetadata({params}: {params: TagProps}) {
    const {tag} = await params;
    return {
        title: `tag: ${tag}`,
    }
}

export default async function TagPage({params}: {params: TagProps}) {
    const {tag} = await params;
    const sortedPosts = getPostMetasByTag(tag);

    return(
        <Container>
            <h1 className="text-3xl font-bold mb-6">#{tag}</h1>
            <PostList posts={sortedPosts} />
        </Container>
    )
}