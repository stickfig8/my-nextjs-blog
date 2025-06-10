'use client';

import MobileHeaderLink from "./MoblieHeaderLink";

type Props = {
    isOpen: boolean;
    onClose: () => void;
}
export default function MobileHeaderPannel({isOpen, onClose} : Props) {

    return(
        <div className={`fixed inset-0 z-50 bg-black/70 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={onClose}>
            <aside className={`fixed top-0 left-0 h-full w-[45%] bg-[var(--background)] shadow-md p-4
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ backgroundImage: "url('/wallpaper.png')" }}
                onClick={(e) => e.stopPropagation()}>

                <div className="flex justify-end">
                    <button onClick={onClose} className="mb-4 text-right w-fit font-bold cursor-pointer active:scale-99 active:brightness-80">✕</button>
                </div>
                
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