import { MDXRemote } from "next-mdx-remote/rsc";
import {MyMdxComponent} from "@/components/MyMdxComponent";

import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import {remarkMark} from "remark-mark-highlight";

type Props = {
    content: string;
}

export default function PostContents({content}: Props) {
    return (
        <MDXRemote
            source={content}
                components={MyMdxComponent}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm, remarkBreaks, remarkMark],
                            rehypePlugins: [rehypeHighlight, rehypeSlug],
                        },
                    }} 
        />
    );
}