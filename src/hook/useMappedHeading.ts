'use client'

import { useState, useEffect } from "react";
import { Heading } from "@/config/types";

export default function useMappedHeading(targetId: string): Heading[] {
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => { // 아래의 작업들은 DOM에 접근하므로 useEffect를 이용해 렌더링 이후 작업
        // querySelectorAll로 반환된 리스트는 NodeList. 이를 map()과 같은 배열 메소드를 사용하기 위해 일반 배열로 변환
        // as HTMLHeadingElement로 ts에게 알려 h 태그의 속성들 사용
        const contentRoot = document.getElementById(targetId);
        if(!contentRoot) return;
    
        const headingElements = Array.from(contentRoot.querySelectorAll('h2, h3')) as HTMLHeadingElement[];            // 상기의 배열을 이용해 Heading객체 배열 만들기
        const mappedHeadings = headingElements.map((element) => ({
            id: element.id,
            text: element.innerText,
            level: element.tagName === "H2" ? 2 : 3
        }));
    
        setHeadings(mappedHeadings);
    }, [targetId]);

    return headings;
}