'use client';

import MobileHeaderLink from "./MoblieHeaderLink";

type Props = {
    isOpen: boolean;
    onClose: () => void;
}
export default function MobileHeaderPannel({isOpen, onClose} : Props) {
    if(!isOpen) return;

    return(
        <div className="fixed inset-0 z-50 bg-black/70" onClick={onClose}>
            <aside className='fixed top-0 left-0 h-full w-[45%] bg-[var(--background)] shadow-md p-4'
                style={{ backgroundImage: "url('/wallpaper.png')" }}
                onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="mb-4 text-right w-full font-bold cursor-pointer">✕</button>
                <div className="flex flex-col gap-4">
                    <MobileHeaderLink href="/" inner="Home" onClick={onClose}/>
                    <MobileHeaderLink href="/blog" inner="Blog" onClick={onClose} />
                    <MobileHeaderLink href="/thoughts" inner="Thoughts" onClick={onClose}/>
                    <MobileHeaderLink href="/tags" inner="Tags" onClick={onClose}/>
                </div>
            </aside>
        </div>
    )
}