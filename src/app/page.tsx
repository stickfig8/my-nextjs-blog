import Container from "@/components/layouts/Container";
import { getFeaturedPosts, getLatestPostMetas } from "@/lib/postDataUtils";
import PostList from "@/components/postLists/PostList";
import FeaturedPosts from "@/components/postLists/FeaturedPosts";

export default function Home() {
  const latestPosts = getLatestPostMetas(3);
  const featuredPosts = getFeaturedPosts();

  return (
    <main>
      <Container>
        <div className="font-bold text-4xl pb-3">Hyeongyu Kim&apos;s blog</div>
        <div className="text-xl text-[var(--mainText)]">Front-end developer</div>
        <div className="text-md text-[var(--subText)] mb-10">Use React/Next.js, Typescript, and Tailwind CSS to consider better UX/UI and services. </div>
        <FeaturedPosts posts={featuredPosts} />
        <h1 className="flex gap-3 text-3xl pb-5"><p>Recent</p><p className="font-bold">Posts</p></h1>
        <PostList posts={latestPosts} />
      </Container>
    </main>
  );
}
