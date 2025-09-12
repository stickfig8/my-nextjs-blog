"use client";

import { ProjectDetail } from "@/config/types"
import Link from "next/link";

type Props = {
    project: ProjectDetail;
}

export default function ProjectCard({project} : Props) {

    return(
        <div className="active:scale-99 active:brightness-80 hover:-translate-y-1 hover:shadow-md transition-transform duration-300 flex gap-2 pb-3 border-b-1 border-[var(--miniText)] cursor-pointer"
            onClick={() => {
                window.open(
                `${project.github}`,
                "_blank",
                "noopener,noreferrer"
                );
            }}
        >
            <img className="w-50 h-30 object-cover object-center rounded-md overflow-hidden border-1" src={project.thumbnail} />
            <div className="w-full h-full flex flex-col gap-1">
                <h1 className="text-lg">{project.title}</h1>
                <p className="text-sm text-[var(--subText)]">{project.projectType} / {project.period}</p>
                <p className="text-md text-[var(--mainText)]">{project.simpleDescription}</p>
                <div className="flex gap-[5px] flex-wrap mt-1">
                    {project.tech.map((el, i) => (
                        <Link key={i} href={`/tags/${el}`} 
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[var(--markBackground)] text-[var(--markForeground)] rounded-sm text-sm px-1 text-base mx-0.3 hover:brightness-80 cursor-pointer">{el}</Link>
                    ))}
                </div>
            </div>
            
        
        </div>
    )
}