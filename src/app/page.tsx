import Container from "@/components/layouts/Container";
import { getFeaturedPosts } from "@/lib/postDataUtils";
import Banner from "@/components/layouts/Banner";
import FeaturedPostList from "@/components/postLists/FeaturedPostList";
import RecentPostList from "@/components/postLists/RecentPostList";

export default function Home() {
  const featuredPosts = getFeaturedPosts();

  return (
    <main>
      <Container>
        <Banner />
        <FeaturedPostList posts={featuredPosts}/>
        <RecentPostList />
      </Container>
    </main>
  );
}
