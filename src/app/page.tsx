import Container from "@/components/layouts/Container";
import { getFeaturedPosts } from "@/lib/postDataUtils";

import FeaturedPosts from "@/components/postLists/FeaturedPosts";
import RecentPosts from "@/components/postLists/RecentPosts";

export default function Home() {
  const featuredPosts = getFeaturedPosts();

  return (
    <main>
      <Container>
        <div className="font-bold text-4xl pb-3">Hyeongyu Kim&apos;s blog</div>
        <div className="text-xl text-[var(--mainText)]">Front-end developer</div>
        <div className="text-md text-[var(--subText)] mb-10">Use React/Next.js, Typescript, and Tailwind CSS to consider better UX/UI and services. </div>
        <FeaturedPosts posts={featuredPosts}/>
        <RecentPosts />
      </Container>
    </main>
  );
}
