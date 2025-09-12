import { ProjectDetail } from "./types"

export const projectContents:ProjectDetail[] = [
    {
        title: "어기가냥? 같이가개!",
        thumbnail: "/projects/cats_thumbnail.jpg",
        projectType: "팀 프로젝트",
        simpleDescription: "React기반 반려동물 동반 장소 추천 서비스입니다.",
        tech: ["React" , "Typescript", "Tailwindcss", "shadcn", "Zustand", "Vite", "ESLint", "Prettier", "Render"],
        domain: "https://frontend-dev-bukp.onrender.com/",
        github: "https://github.com/10teamm/frontend",
        period: "25.07 ~ 25.08"
    },
    {
        title: "Next 블로그",
        thumbnail: "/assets/blog_thumbnail.jpg",
        simpleDescription: "Next.js + tailwind기반 정적 블로그입니다.",
        projectType: "개인 프로젝트",
        tech: ["Nextjs" , "Typescript", "Tailwindcss", "gray-matter", "MDX", "Vercel"],
        domain: "https://stickfig8blog.vercel.app",
        github: "https://github.com/stickfig8/my-nextjs-blog",
        period: "25.06"
    },
    
    {
        title: "simply practice",
        thumbnail: "/projects/prac_thumbnail.png",
        projectType: "개인 프로젝트",
        simpleDescription: "React기반 악기 연습 플랫폼입니다.",
        tech: ["React" , "Typescript", "Tailwindcss", "shadcn", "Zustand", "WebAudioApi", "Wavesurfer", "Render"],
        domain: "https://github.com/stickfig8/simply-practice",
        github: "https://github.com/stickfig8/simply-practice",
        period: "25.07 ~ "
    },

]