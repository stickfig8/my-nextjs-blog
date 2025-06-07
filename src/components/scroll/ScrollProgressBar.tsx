'use client'

import useScrollPercent from "@/hook/useScrollPercent"

export default function ScrollProgressBar() {
    const scrollPercent = useScrollPercent();
    
    return (
        <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-transparent">
            <div className="h-full bg-[var(--foreground)] transition-all ease-linear"
                style={{width: `${scrollPercent}%`}}></div>

        </div>
    )
}