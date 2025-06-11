import "./globals.css";
import BlogHeader from "../components/layouts/BlogHeader";
import BlogFooter from "../components/layouts/BlogFooter";
import { ModeThemeProvider } from "@/provider/ModeThemeProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hyeongyu's blog",
    description: "Front-end developer's blog.",
    icons: {
      icon:'/assets/blog_logo.png',
      apple: '/assets/apple-touch-icon.png',
    },
    openGraph: {
        title: "Hyeongyu's blog",
        description: "Front-end developer's blog.",
        images: ["/assets/blog_thumbnail.jpg"], // 메인 og:image
        type: "website",
    },
    twitter: {
        card: "summary_large_image", 
        title: "Hyeongyu's Blog",
        description: "Front-end developer's blog.",
        images: ["/assets/blog_thumbnail.jpg"],
    },
};

export default function RootLayout({children, }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="px-5">
        <ModeThemeProvider>
          <BlogHeader />
            {children}
          <BlogFooter />
        </ModeThemeProvider>
      </body>
    </html>
  );
}
