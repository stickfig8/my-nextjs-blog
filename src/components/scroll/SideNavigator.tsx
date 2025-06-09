'use client'

import useObserver from "@/hook/useObserver";
import { Heading } from "@/config/types";
import ScrollButton from "./ScrollButton";
import { scrollToHeading, scrollToTop, scrollToBottom } from "@/lib/scrollUtils";

type Props = {
    toc: Heading[];
}

export default function SideNavigator({toc}: Props) {
    const tocWithComments = [...toc, {id: "comments", text:"댓글", level: 2}]; // 댓글 목차에 추가
    const activeIds = useObserver(tocWithComments);
    
    return (
        <aside className='absolute -top-[150px] left-full -mb-[100px] hidden h-[110%] lg:block'>
            <div className='sticky top-[30px] z-10 ml-[1.5rem] mt-[200px] w-[200px]'>
                <nav className="text-sm mb-4 px-2 py-2 border-l">
                    <h2 className="text-base font-bold mb-2">목차</h2>                    
                    <ul className="space-y-1">
                        {tocWithComments.map((heading) => (
                            <li key={heading.id} className={`cursor-pointer hover:underline hover:text-[var(--foreground)] ${activeIds.includes(heading.id) ? "" : "text-[var(--subText)]"} ${heading.level === 3 ? "ml-4" : "ml-0"}`}
                                onClick={() =>{scrollToHeading(heading);}}>                       
                                {heading.text}
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-5 ml-3 mt-1">
                        <ScrollButton onClick={() => scrollToTop()} inner="△"/>
                        <ScrollButton onClick={() => scrollToBottom()} inner="▽"/>
                    </div>
                </nav> 
            </div>
        </aside>
        
    )
}