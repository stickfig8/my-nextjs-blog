'use client';

import { ThemeProvider } from "next-themes";
import React from "react";

export function ModeThemeProvider({children}: {children:React.ReactNode}) {
    return(
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem={true}>
            {children}
        </ThemeProvider>
    )
}