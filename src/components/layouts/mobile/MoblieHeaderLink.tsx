import Link from "next/link";

type Props = {
    inner : string;
    href : string;
    onClick: () => void;
}

export default function MobileHeaderLink({inner, href, onClick} : Props) {
    return(
        <Link href={href}
            className='px-1 text-[1.7rem] hover:scale-105 ease-in-out transition-transform duration-400'
            onClick={onClick}>

            {inner}
        </Link>
    );
}