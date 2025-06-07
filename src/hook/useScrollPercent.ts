'use client'

import { useEffect, useState } from "react"

export default function useScrollPercent() {
    const [scrollPercent, setScrollPercent] = useState<number>(0);

    useEffect(() => {
        function updateScroll() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScrollPercent(scrolled);
        };
        window.addEventListener('scroll', updateScroll);
        updateScroll();
        
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    return scrollPercent;
}