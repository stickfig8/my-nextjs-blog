'use client';

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import ThemeIcon from "../icons/ThemeIcon";
import { ThemeOption } from "@/config/types";
import SetThemeList from "./SetThemeList";


export default function ThemeToggleButton() {
    const {resolvedTheme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);

        const handleClickOutside = (e: MouseEvent) => {
            if(ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);
    if(!mounted) return null;

    const handleSelect = (theme: ThemeOption) => {
        setTheme(theme);
        setIsOpen(false);
    }

    return(
        <div className="relative" ref={ref}>
            <button onClick={() => setIsOpen(!isOpen)}
                className="flex w-[35px] h-[35px] mt-[7px] rounded-full border-1 transition-[border-width] duration-200 ease-in-out items-center justify-center active:scale-95 active:brightness-70 hover:border-2 cursor-pointer">
                {resolvedTheme == 'dark' ? <ThemeIcon name='dark' /> : resolvedTheme === 'light' ? <ThemeIcon name='light' /> : <ThemeIcon name='system' />}
            </button>
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-22 rounded-md border-1 bg-[url('/assets/wallpaper.png')] border-[var(--oppoForeground)] bg-[var(--oppoBackground)] shadow-lg text-md z-50">
                    <ul className="flex flex-col">
                        <SetThemeList name="light" onClick={handleSelect} />
                        <SetThemeList name="dark" onClick={handleSelect} />
                        <SetThemeList name="system" onClick={handleSelect} />                     
                    </ul>
                </div>
            )}
        </div>
        
    )
}