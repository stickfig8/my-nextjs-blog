import { AdjacentPosts } from "@/config/types";
import AdjacentIcon from "../icons/AdjacentIcon";
import Link from "next/link";

export default function PostNextPrev({next, prev} : AdjacentPosts) {
    return (
        <section className="flex justify-between my-2 mt-9 gap-10">
            <div className="w-1/2">
                {next ? (
                <Link href={`/${next.category}/${next.slug}`} className="text-[var(--subText)] hover:text-[var(--foreground)] cursor-pointer text-lg">
                    <div className="flex flex-col gap-2">
                        <AdjacentIcon width={30} height={30} destination="next" />
                        <span>{next.title}</span>
                    </div>
                    
                </Link>
                ) : (
                    <div className="flex flex-col gap-2 text-[var(--subText)] cursor-not-allowed text-lg">
                        <AdjacentIcon width={30} height={30} destination="next" />
                        <span>다음 글 없음</span>
                    </div>
        
                )}
            </div>

            <div className="w-1/2">
                {prev ? (
                <Link href={`/${prev.category}/${prev.slug}`} className="text-[var(--subText)] hover:text-[var(--foreground)] cursor-pointer text-lg">
                    <div className="flex flex-col items-end gap-2">
                        <AdjacentIcon width={30} height={30} destination="prev" />
                        <span>{prev.title}</span>
                    </div>
                </Link>
                ) : (
                <div className="flex flex-col gap-2 text-[var(--subText)] cursor-not-allowed text-lg">
                        <AdjacentIcon width={30} height={30} destination="prev" />
                        <span>이전 글 없음</span>
                </div>
                )}
            </div>
        </section>
    )
}