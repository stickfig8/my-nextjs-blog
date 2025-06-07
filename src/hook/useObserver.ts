'use client'

import { useState, useEffect, useRef } from "react";
import { Heading } from "@/config/types";

export default function useObserver(headings : Heading[]): string[] {
    const [activeIds, setActiveIds] = useState<string[]>([]);
    const lastSeen = useRef<string | null>(null);

    useEffect(() => {
            // 감시의 범위, 감지 시 수행할 작업 설정
            const idSet = new Set<string>();
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if(!entry.isIntersecting ) { // 감시 안할때
                        if(idSet.size > 1) {
                            idSet.delete(id);
                        } else {
                            lastSeen.current = id;
                        }
                        
                    } else { // 감시 할 때
                        if(idSet.size === 1) {
                            if(lastSeen.current) {
                                idSet.delete(lastSeen.current);
                            }
                        }
                        idSet.add(id);
                    }
                });
    
                setActiveIds(Array.from(idSet));
                },
                {
                    rootMargin: "0px 0px -60% 0px",
                    threshold: 0.1,
                }
            );
            // 감시 대상을 headings의 원소들로 설정
            headings.forEach((heading) => {
                const element = document.getElementById(heading.id);
                if(element) observer.observe(element);
            })
            return () => observer.disconnect();
        }, [headings]); // heading이 변할 일은 없지만 혹시 모를 동적 mdx나 라우팅 대비

        return activeIds;
}