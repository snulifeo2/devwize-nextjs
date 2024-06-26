import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const defaultOgImage = "/assets/blog/default/default_og_image.png";
  const defaultCoverImage = "/assets/blog/default/default_cover_image.png";

  if (!data.coverImage) {
    data.coverImage = defaultCoverImage;
  }

  if (!data.ogImage) {
    data.ogImage = defaultOgImage;
  }

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}
