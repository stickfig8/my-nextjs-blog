'use client';

import { useState, useRef, useEffect } from "react";
import PostCard from "./PostCard";
import { PostMetaWithCategory } from "@/config/types";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useCarouselController } from "@/hook/useCarouselController";

type Props = {
    posts: PostMetaWithCategory[];
}

export default function FeaturedPostList({posts}: Props) {
       
    const { plugin, setApi, current, movePrev, moveNext, moveIndex } =
    useCarouselController(posts);

    return(
        <section className="mb-8">
            <div className="flex gap-5 item-center justify-between">
                <h2 className="flex gap-3 text-3xl pb-5"><p>Featured</p><p className="font-bold">Posts</p></h2>
                {/* control panel */}
                <div className="flex item-center text-xs">
                    <button onClick={movePrev} className="cursor-pointer px-2">〈</button>
                    {posts.map((_, i) => (
                        <button key={i} className="cursor-pointer mx-1 text-md" onClick={() => moveIndex(i)} aria-label={`Go to slide ${i + 1}`}>
                            {i === current ? "●" : "○"}
                        </button>
                    )

                    )}
                    <button onClick={moveNext} className="cursor-pointer px-2">〉</button>
                </div>
            </div>
            
            <Carousel plugins={[plugin.current]} setApi={setApi}>
                <CarouselContent>
                    {posts.map((post) => (
                        <CarouselItem key={post.slug}>
                            <PostCard post={post} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
        
    )
}