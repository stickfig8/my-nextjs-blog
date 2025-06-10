import { PostMetaWithCategory } from "@/config/types";
import PostCard from "../postLists/PostCard";

type Props = {
    posts: PostMetaWithCategory[];
}


export default function PostList({posts}: Props) {
    return(
        <ul className="space-y-6">
                {posts.map((post) => (
                    <li key={post.slug} >
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
    )
}