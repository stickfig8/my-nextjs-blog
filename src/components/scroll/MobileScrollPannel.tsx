'use client';

import { scrollToBottom, scrollToTop } from "@/lib/scrollUtils";
import MobileScrollButton from "./MobileScrollButton";

export default function MobileScrollPannel() {
    return (
        <div className="block lg:hidden fixed bottom-4 right-4 flex gap-4 z-50">
            <MobileScrollButton onClick={() => scrollToTop()} inner="▲" />
            <MobileScrollButton onClick={() => scrollToBottom()} inner="▼" />
        </div>

    );
}