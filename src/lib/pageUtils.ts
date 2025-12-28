import { PostMetaWithCategory } from "@/config/types";
import { notFound } from "next/navigation";

export function normalizePageSearchParam(searchParams: Record<string, number | undefined>, totalPages: number) {
    const keys = Object.keys(searchParams);

    // 허용된 쿼리 키 검사
    if (keys.length > 1) notFound();
    if (keys.length === 1 && keys[0] !== "page") notFound();

    // 기본값 1
    let page = 1;

    // 정규화
    if (searchParams.page !== undefined) {
        const n = Number(searchParams.page);
        if (!n || n < 1) page = 1;
        else page = n;
    }

    // 범위 초과 시 보정
    if (page > totalPages) page = 1;

    return page;
}

export function paginate(posts: PostMetaWithCategory[], page: number, size: number) {
    const start = (page - 1) * size;
    const end = start + size;
    return posts.slice(start, end);
}