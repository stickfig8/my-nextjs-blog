import Link from "next/link"

type Props = {
    data: string[];
}
export default function PostTags({data} : Props) {
    return(
        <div className="flex gap-3 mt-6">
            <p className="text-xl font-bold">tags: </p>
                {data.map((tag: string) => (
                    <Link key={tag} href={`/tags/${tag}`} className="text-lg text-[var(--tags)] hover:underline">
                        #{tag}
                    </Link>
                ))}
        </div>
    )
}