import Link from "next/link";

type Props = {
    isActive : boolean;
    inner : string;
    href : string;
}

export default function HeaderLink({isActive, inner, href} : Props) {
    return(
        <Link href={href}
            className={`px-1 text-[1.7rem] will-change-transform hover:scale-103 active:scale-99 active:brightness-70 ease-in-out transition-transform duration-200 ${isActive ? "underline" : ""} underline-offset-7`}>
            {inner}
        </Link>
    );
}