import Link from "next/link";

type Props = {
    inner : string;
    href : string;
    onClick: () => void;
}

export default function MobileHeaderLink({inner, href, onClick} : Props) {
    return(
        <Link href={href}
            className='px-1 text-[1.7rem] active:scale-99 active:brightness-80 will-change-transform hover:scale-102 ease-in-out transition-transform duration-300'
            onClick={onClick}>

            {inner}
        </Link>
    );
}