import Container from "@/components/layouts/Container";
import PageTitle from "@/components/layouts/PageTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectContents } from "@/config/projectContents";

export function generateMetadata() {
    return {
        title: `Projects | Hyeongyu's blog`,
        openGraph: {
            title: `Projcets | Hyeongyu's blog`,
            description: `project list`,
            images: ['/assets/blog_thumbnail.jpg'],
            type: "article"
        },
        twitter: {
            card: 'summary_large_image',
            title: `Projects | Hyeongyu's blog`,
            description: `project list`,
            images: ['/assets/blog_thumbnail.jpg'],
        }
    }
}

export default function ProjectsPage() {
    return (
        <Container>
            <PageTitle>Projects</PageTitle>
            <article className="w-full h-fit flex flex-col gap-5">
                {projectContents.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </article>
        </Container>
    );
}