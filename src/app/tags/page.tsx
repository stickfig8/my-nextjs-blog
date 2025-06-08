import Container from "@/components/layouts/Container";
import PageTitle from "@/components/layouts/PageTitle";
import { getAllTags } from "@/lib/postDataUtils";
import Link from "next/link";

export function generateMetadata() {
    return {
        title: `Tags | Hyeongyu's blog`,
        openGraph: {
            title: ` Tags | Hyeongyu's blog`,
            description: `tag list`,
            images: ['/blog_thumbnail.jpg'],
            type: "article"
        },
        twitter: {
            card: 'summary_large_image',
            title: `Tags | Hyeongyu's blog`,
            description: `tag list`,
            images: ['/blog_thumbnail.jpg'],
        }
    }
}

export default function TagsPage() {
    const tags = getAllTags();
    const sortedTags = Object.entries(tags).sort((a, b) => b[1] - a[1]);

    return (
        <Container>
            <PageTitle>Tags</PageTitle>
            <ul className="space-y-2">
                {sortedTags.map(([tag, count]) => 
                    <li key={tag}>
                        <Link href={`/tags/${tag}`} className="text-lg text-[var(--mainText)] hover:underline hover:text-[var(--foreground)] underline-offset-4">
                            #{tag} ({count})
                        </Link>
                    </li>
                )}
            </ul>
        </Container>
    );
}