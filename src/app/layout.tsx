// app/layout.tsx
import Footer from "@/app/_components/footer";
import ClientSideBarLayout from "@/app/_components/client-sidebar-layout";
import { getAllPosts } from "@/lib/api";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Programmer Axiology's Blog`,
  description: ``,
  openGraph: {
    images: ['/assets/blog/default/default_og_image.png'],
  },
  metadataBase: new URL("https://devwize.com"),
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map(post => post.category)));

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png">
        </link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png">
        </link>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={inter.className}>
        <ClientSideBarLayout categories={categories}>
          {children}
          <Footer />
        </ClientSideBarLayout>
      </body>
    </html>
  );
};

export default RootLayout;
