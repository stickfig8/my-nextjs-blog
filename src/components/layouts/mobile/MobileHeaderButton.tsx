import MenuIcon from '@/assets/svgs/menu.svg';

type Props = {
    onOpen: () => void;
};

export default function MobileHeaderButton({ onOpen }: Props) {
    return(
        <button className="sm:hidden cursor-pointer active:scale-99 active:brightness-80 hover:scale-103" onClick={onOpen}>
            <MenuIcon width={35} height={35} className="stroke-current" />
        </button>
    )
}