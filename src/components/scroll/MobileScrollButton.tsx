type Props = {
    onClick: () => void;
    inner: string;
}

export default function MobileScrollButton({onClick, inner} : Props) {
    return (
        <button onClick={onClick} className="border w-8 h-8 rounded-full border-2 text-xl bold shadow-md cursor-pointer will-change-transform active:scale-95 active:brightness-90 transition-transform duartion-100" >
            {inner}
        </button>
    )
}