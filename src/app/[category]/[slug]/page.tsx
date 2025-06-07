import { getPostData, getAllSlugs, extractHeadingsFromMDX} from "@/lib/postDataUtils"
import Container from "@/components/layouts/Container";
import { PostProps } from "@/config/types";
import { Metadata } from "next";
import SideNavigator from "@/components/scroll/SideNavigator";
import TopNavigator from "@/components/scroll/TopNavigator";
import ScrollProgressBar from "@/components/scroll/ScrollProgressBar";
import PostTags from "@/components/posts/PostTags";
import PostContents from "@/components/posts/PostContents";


export const dynamicParams = false;

export function generateStaticParams() { // ssg 렌더링
    const slugList = getAllSlugs();
    return slugList;
}

export async function generateMetadata({params} : {params: PostProps}): Promise<Metadata>{ // 메타데이터 입력
    const { category, slug } = await params;

    const {meta} = await getPostData(category, slug);

    return {
        title: meta.title,
        description: meta.desc
    }
}

export default async function BlogPostPage({params} : {params: PostProps}) {
    const {category, slug} = await params;

    const data = getPostData(category, slug);
    const headings = extractHeadingsFromMDX(data.content);

    return (
        <>
            <ScrollProgressBar />
            <Container>
                <article className="relative">
                <div id={data.meta.slug}>
                    <section className="text-3xl font-bold">{data.meta.title}</section>
                    <p className="text-sm mt-3 text-[var(--subText)]">[{data.meta.date}]</p>
                    <TopNavigator toc={headings}/>
                    <PostContents content={data.content} /> 
                    {data.meta.tags && <PostTags data={data.meta.tags} />}
                </div>
                    <SideNavigator toc={headings}/>
                </article>
            </Container>
        </>
  );
}