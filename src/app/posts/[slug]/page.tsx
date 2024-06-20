import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import dynamic from 'next/dynamic';

const Comments = dynamic(() => import('@/app/_components/comments'), { ssr: false });



export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      {/* <Alert preview={post.preview} /> */}
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
          <hr className="mt-32 mb-32 border-t border-gray-300" />
          <Comments />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

 
  const title = `${post.title} | Programmer Axiology's Blog Post`;
  const description = post.excerpt || "Programmer Axiology's Blog Post";
  const url = `https://devwize.com/posts/${params.slug}`;
  const ogImage = post.ogImage;
  const imageUrl = typeof ogImage === 'string' ? ogImage : ogImage?.url;
  const keywords = post.keywords || [];

  /* if (!imageUrl) {
    console.error('OG Image URL is missing or invalid');
  } */

  const metadata: Metadata = {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
  };

  // JSON.stringify를 사용해 중첩된 객체를 문자열로 변환하여 출력합니다.
  //console.log(JSON.stringify(metadata, null, 2));

  return metadata;
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
