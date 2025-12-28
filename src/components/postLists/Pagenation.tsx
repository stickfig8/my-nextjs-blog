"use client"

import { useSearchParams, useRouter } from "next/navigation";

type Props = {
    currentPage: number;
    totalPages: number;
}

export default function Pagenation({currentPage, totalPages} : Props) {
    const router = useRouter();
    const params = useSearchParams();

    const goToPage = (p:number) => {
        const newParams = new URLSearchParams(params);
        newParams.set("page", String(p));
        router.push(`?${newParams.toString()}`);
    };

    return (
        <div className="flex justify-center gap-1 text-lg mt-3">
            <button
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                className="px-3 py-1 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
                〈
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
            <button
                key={i}
                onClick={() => goToPage(i+1)}
                className={`px-3 py-1 cursor-pointer ${currentPage === i + 1 ? "underline" : ""}`}
            >
                {i + 1}
            </button>
            ))}

            <button
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
                className="px-3 py-1 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
                〉
            </button>
        </div>
    )
}