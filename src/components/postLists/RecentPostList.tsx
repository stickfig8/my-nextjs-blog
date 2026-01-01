import { getLatestPostMetas } from "@/lib/postDataUtils";
import PostList from "./PostList";
import { RECENT_SIZE } from "@/config/commonConfigs";


export default function RecentPostList() {
    const latestPosts = getLatestPostMetas(RECENT_SIZE);

    return(
        <section className="my-3">
            <h1 className="flex gap-3 text-3xl pb-5"><p>Recent</p><p className="font-bold">Posts</p></h1>
            <PostList posts={latestPosts} />
        </section>
    )
}