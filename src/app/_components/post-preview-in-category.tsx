import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreviewInCategory({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row mb-5">
      <div className="md:w-1/3 mb-5 md:mb-0">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="md:w-2/3 md:pl-5">
        <h3 className="text-3xl mb-3 leading-snug">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
}
