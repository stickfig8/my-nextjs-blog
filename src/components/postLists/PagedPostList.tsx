"use client";

import { PostMetaWithCategory } from "@/config/types"
import { useEffect, useState } from "react";
import PostList from "./PostList";
import Pagenation from "./Pagenation";

type Props = {
    posts: PostMetaWithCategory[];
}
export default function PagedPostList({posts} : Props) {
    const [page, setPage] = useState(0);
    const [pagedPosts, setPagedPosts] = useState<PostMetaWithCategory[]>(posts);

    const PAGE_LENGTH = 6;
    const totalPages = Math.ceil(posts.length / PAGE_LENGTH);

    useEffect(() => {
        const start = page * PAGE_LENGTH;
        const end = start + PAGE_LENGTH;
        setPagedPosts(posts.slice(start, end));
    }, [page, posts])
    

    return (
        <>
            <PostList posts={pagedPosts} />
            <Pagenation page={page} setPage={setPage} totalPages={totalPages} />
        </>
        
    )
}