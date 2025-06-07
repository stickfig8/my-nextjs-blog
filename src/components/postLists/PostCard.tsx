import Link from "next/link"
import { PostMetaWithCategory } from "@/config/types";

type Props = {
    post: PostMetaWithCategory;
}


export default function PostCard({post}:Props) {
    return(
        <Link href={`/${post.category}/${post.slug}`}>
            <h2 className="text-xl font-semibold group-hover:underline">{post.title}</h2>
            {post.desc && (
                <p className="text-md text-[var(--subText)]">{post.desc}</p>
            )}
            {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2">
                    {post.tags.map((tag) => (
                        <span key={tag} className="text-sm text-[var(--subText)]">
                            #{tag} 
                        </span>
                    ))}
                </div>
            )}
            {post.date && (
                <p className="text-xs text-[var(--miniText)]">{post.date}</p>
            )}
            <hr className="mt-2 border-t border-[var(--miniText)]" />
        </Link>
    );
}