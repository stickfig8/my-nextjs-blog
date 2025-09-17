import Container from "@/components/layouts/Container";
import PageTitle from "@/components/layouts/PageTitle";
import { getAllTags } from "@/lib/postDataUtils";
import Link from "next/link";

export function generateMetadata() {
    return {
        title: `Tags`,
        openGraph: {
            title: `Tags | Hyeongyu's blog`,
            description: `tag list`,
            images: ['/assets/blog_thumbnail.jpg'],
            type: "article"
        },
        twitter: {
            card: 'summary_large_image',
            title: `Tags | Hyeongyu's blog`,
            description: `tag list`,
            images: ['/assets/blog_thumbnail.jpg'],
        }
    }
}

export default function TagsPage() {
    const tags = getAllTags();
    const sortedTags = Object.entries(tags).sort((a, b) => {
        const countDiff = b[1] - a[1]; // 1차: 수량 내림차순
        if (countDiff !== 0) return countDiff;
        return a[0].localeCompare(b[0]); // 2차: 이름 오름차순
    });
    
    const rows: [string, number][][] = [[], [], []];
    sortedTags.forEach((tag, idx) => {
        rows[idx % 3].push(tag);
    });

    return (
        <Container>
            <PageTitle>Tags</PageTitle>
            <article className="flex mb-8">
                {rows.map((row, idx) => (
                    <div key={idx} className={`w-1/3 flex flex-col gap-4`}>
                        {row.map((tag) => 
                            <Link key={tag[0]} href={`/tags/${tag[0]}`} className="text-lg text-[var(--mainText)] hover:underline hover:text-[var(--foreground)] underline-offset-4 active:scale-99 active:brightness-80">
                                #{tag[0]} ({tag[1]})
                            </Link>
                        )}
                    </div>
                ))}
            </article>
        </Container>
    );
}