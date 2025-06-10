type Props = {
    onOpen: () => void;
};

export default function MobileHeaderButton({ onOpen }: Props) {
    return(
        <button className="sm:hidden text-3xl cursor-pointer will-change-transform active:scale-99 active:brightness-80 hover:scale-103" onClick={onOpen}>☰</button>
    )
}