'use client'

import { Heading } from "@/config/types";
import { scrollToHeading } from "@/lib/scrollUtils";

type Props = {
    toc: Heading[];
}

export default function TopNavigator({toc}: Props) {
    const tocWithComments = [...toc, {id: "comments", text:"댓글", level: 2}]; // 댓글 목차에 추가
    
    return (
        <nav className='mt-9 py-4 block lg:hidden border-t border-b'>
            <h2 className="text-base font-bold mb-2">목차</h2>
            <ul className="space-y-1">
                {tocWithComments.map((heading) => (
                    <li key={heading.id} className={`cursor-pointer hover:underline hover:text-[var(--foreground)] text-[var(--subText)] ${heading.level === 3 ? "ml-4" : "ml-0"}`} 
                        onClick={() =>{scrollToHeading(heading)}}>
                        {heading.text}
                    </li>
                ))}
            </ul>
        </nav>
        
    )
}