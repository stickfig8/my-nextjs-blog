'use client'

import { useState, useEffect, useRef } from "react";
import { Heading } from "@/config/types";

export default function useObserver(headings : Heading[]): string[] {
    const [activeIds, setActiveIds] = useState<string[]>([]);
    const idSet = useRef<Set<string>>(new Set());
    
    const lastScrollY = useRef(0);
    const isScrollingDown = useRef(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            isScrollingDown.current = currentY > lastScrollY.current;
            lastScrollY.current = currentY;
        };
        window.addEventListener('scroll', handleScroll);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target.id;
                if(!id) return;

                const y = entry.boundingClientRect.y;

                if(entry.isIntersecting && isScrollingDown.current) {
                    idSet.current.add(id);
                } else if(!entry.isIntersecting && y > 0) {
                    idSet.current.delete(id);
                }
            });
            setActiveIds(Array.from(idSet.current));
            }, 
            {
                rootMargin: "0px 0px -50% 0px",
                threshold: 0.1,
            }
        );

        const applyInitialVisibleHeadings = () => {
            headings.forEach((heading) => {
                const el = document.getElementById(heading.id);
                if (el) {
                    const rect = el.getBoundingClientRect();

                    if(rect.y < 0) {
                        idSet.current.add(heading.id);
                    }
                }
            })
        }

        applyInitialVisibleHeadings();

        headings.forEach((heading) => {
                const element = document.getElementById(heading.id);
                if(element) observer.observe(element);
        });

        return() => {
            window.removeEventListener('scroll', handleScroll); 
            observer.disconnect();
        }
    }, [headings]);

    return activeIds;
}