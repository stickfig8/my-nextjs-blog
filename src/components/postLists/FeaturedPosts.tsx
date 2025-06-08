'use client';

import { useState, useRef, useEffect } from "react";
import PostCard from "./PostCard";
import { PostMetaWithCategory } from "@/config/types";

type Props = {
    posts: PostMetaWithCategory[];
}

export default function FeaturedPosts({posts}: Props) {
    
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const max = posts.length;

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setIndex((prev) => (prev + 1) % max);
        }, 4000);
        return () => {
            if(timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [index, max]);
    
    const handlePrev = () => setIndex((prev) => (prev - 1 + max) % max);
    const handleNext = () => setIndex((prev) => (prev + 1 + max) % max);
    const handleDotClick = (i:number) => setIndex(i);

    return(
        <section className="relative mb-15">
            <h2 className="flex gap-3 text-3xl pb-5"><p>Featured</p><p className="font-bold">Posts</p></h2>
            {/* control panel */}
                <div className="absolute top-10 right-0 transform -translate-x-1/2 text-xs">
                    <button onClick={handlePrev} className="cursor-pointer px-2">〈</button>
                    {posts.map((_, i) => (
                        <button key={i} className="cursor-pointer mx-1 text-md" onClick={() => handleDotClick(i)} aria-label={`Go to slide ${i + 1}`}>
                            {i === index ? "●" : "○"}
                        </button>
                    )

                    )}
                    <button onClick={handleNext} className="cursor-pointer px-2">〉</button>
                </div>

            <div className="w-full overflow-hidden">
            {/* post panel */}
                <div className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)`, width: `${100 * max}%` }}
                >
                    {posts.map((post) => (
                    <div key={post.slug} className="w-full flex-shrink-0 transition-transform duration-500 hover:-translate-y-1 hover:shadow-md">
                        <PostCard post={post} />
                    </div>
                    ))}
                </div>
            </div>
        </section>
        
    )
}