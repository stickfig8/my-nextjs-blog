'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
    const {resolvedTheme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {setMounted(true)}, []);
    if(!mounted) return null;

    const isDark = resolvedTheme === 'dark';

    return(
        <button onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="w-[35px] h-[35px] mt-[7px] ml-auto rounded-full border-1 transition-[border-width] duration-200 ease-in-out items-center justify-center hover:border-3 cursor-pointer">
            {isDark ? 'D' : 'L'}
        </button>
    )
}