'use client';

import { scrollToBottom, scrollToTop } from "@/lib/scrollUtils";
import MobileScrollButton from "./MobileScrollButton";

export default function MobileScrollPannel() {
    return (
        <div className="block lg:hidden fixed bottom-4 right-4 flex gap-3 z-50">
            <MobileScrollButton onClick={() => scrollToTop()} destination="top" />
            <MobileScrollButton onClick={() => scrollToBottom()} destination="bottom" />
        </div>

    );
}