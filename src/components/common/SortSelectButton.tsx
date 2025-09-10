"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
    text: string;
    to: string;
}

export default function SortSelectButton({text, to} : Props) {
    return (
        <Link className={`w-fit h-7 flex items-center justify-center text-lg cursor-pointer hover:underline`}
            href={"/tags/"+to}>
            #{text}
        </Link>
    )
}