import Link from "next/link"
import { PostMetaWithCategory } from "@/config/types";

type Props = {
    post: PostMetaWithCategory;
}


export default function PostCard({post}:Props) {
    return(
        <div className="active:scale-99 active:brightness-80 hover:-translate-y-1 hover:shadow-md transition-transform duration-300 ">
            <Link href={`/${post.category}/${post.slug}`}>
                <h2 className="text-xl font-semibold group-hover:underline mb-2">{post.title}</h2>
                {post.desc && (
                    <p className="text-sm text-[var(--subText)] mb-2">{post.desc}</p>
                )}
                {/* {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                        {post.tags.map((tag) => (
                            <span key={tag} className="text-sm text-[var(--subText)] leading-tight">
                                #{tag} 
                            </span>
                        ))}
                    </div>
                )} */}
                {post.date && (
                    <p className="text-xs text-[var(--miniText)] mb-2">{post.date}</p>
                )}
                <hr className="mt-2 border-t border-[var(--miniText)]" />
            </Link>
        </div>
        
    );
}