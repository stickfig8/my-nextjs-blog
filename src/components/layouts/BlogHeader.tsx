'use client'

import { usePathname } from "next/navigation";
import HeaderLink from "./HeaderLink";
import ThemeToggleButton from "./ThemeToggleButton";

export default function BlogHeader() {
    const pathName = usePathname();

    return(
        <header className="flex gap-2 mt-3 p-3 mx-auto max-w-[800px] border-b">
            <HeaderLink href="/" isActive={pathName === '/'} inner="Home" />
            <HeaderLink href="/blog" isActive={pathName.startsWith('/blog')} inner="Blog" />
            <HeaderLink href="/thoughts" isActive={pathName.startsWith('/thoughts')} inner="Thoughts" />
            <HeaderLink href="/tags" isActive={pathName.startsWith('/tags')} inner="Tags" />
            <ThemeToggleButton />
        </header>
    );
}