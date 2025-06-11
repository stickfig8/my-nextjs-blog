'use client'

import { usePathname } from "next/navigation";
import HeaderLink from "./HeaderLink";
import ThemeToggleButton from "../themes/ThemeToggleButton";
import { useState } from "react";
import MobileHeaderPannel from "./mobile/MoblieHeaderPannel";
import MobileHeaderButton from "./mobile/MobileHeaderButton";

export default function BlogHeader() {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false); 

    return(
        <header className="flex gap-2 max-w-[800px] mx-auto justify-between mt-3 p-3 border-b">
            {/* pc화면 */}
            <nav className="sm:flex hidden gap-2">
                <HeaderLink href="/" isActive={pathName === '/'} inner="Home" />
                <HeaderLink href="/blog" isActive={pathName.startsWith('/blog')} inner="Blog" />
                <HeaderLink href="/thoughts" isActive={pathName.startsWith('/thoughts')} inner="Thoughts" />
                <HeaderLink href="/tags" isActive={pathName.startsWith('/tags')} inner="Tags" />
            </nav>
            
            {/* 모바일 화면 */}
            <MobileHeaderButton onOpen={() => setIsOpen(true)}/>
            <MobileHeaderPannel isOpen={isOpen} onClose={() => setIsOpen(false)} />

            <ThemeToggleButton />
        </header>
    );
}