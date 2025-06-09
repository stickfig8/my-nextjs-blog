type Props = {
    onOpen: () => void;
};

export default function MobileHeaderButton({ onOpen }: Props) {
    return(
        <button className="sm:hidden text-3xl cursor-pointer" onClick={onOpen}>☰</button>
    )
}