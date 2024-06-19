// app/posts/[category]/page.tsx

import { PostPreviewInCategory } from "@/app/_components/post-preview-in-category";
import { getAllPosts, getPostsByCategory } from "@/lib/api";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const posts = getPostsByCategory(params.category);

  return (
    <div className="pt-15">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 pb-10">
        {params.category}
      </h1>
      <div className="grid grid-cols-1 gap-y-20 mb-32">
        {posts.map((post) => (
          <PostPreviewInCategory
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return categories.map((category) => ({
    category,
  }));
}
