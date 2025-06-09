import Link from "next/link";

type Props = {
    isActive : boolean;
    inner : string;
    href : string;
}

export default function HeaderLink({isActive, inner, href} : Props) {
    return(
        <Link href={href}
            className={`px-1 text-[1.7rem] will-change-transform hover:scale-110 ease-in-out transition-transform duration-400 ${isActive ? "underline" : ""} underline-offset-7`}>
            {inner}
        </Link>
    );
}