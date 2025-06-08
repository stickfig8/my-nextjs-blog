'use client';

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes';

export default function GiscusComments() {
    const { resolvedTheme } = useTheme();
    const theme = resolvedTheme === 'dark' ? 'dark_dimmed' : 'noborder_light';

    return (
        <Giscus
            key={theme}
            id="comments"
            repo={process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`}
            repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID!}
            category="Comments"
            categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!}
            mapping="og:title"
            strict='1'
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={theme}
            lang="ko"
        />
    )
}