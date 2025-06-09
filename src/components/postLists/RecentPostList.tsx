import { getLatestPostMetas } from "@/lib/postDataUtils";
import PostList from "./PostList";


export default function RecentPostList() {
    const latestPosts = getLatestPostMetas(3);

    return(
        <section className="my-3">
            <h1 className="flex gap-3 text-3xl pb-5"><p>Recent</p><p className="font-bold">Posts</p></h1>
            <PostList posts={latestPosts} />
        </section>
    )
}