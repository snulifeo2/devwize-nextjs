import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import matter from 'gray-matter';


export default async function markdownToHtml(markdown: string) {
  const { data, content } = matter(markdown);
  console.log("테스트 입니다 테스트 입니다")
  console.log("테스트 입니다 테스트 입니다")
  console.log("테스트 입니다 테스트 입니다")
  console.log("테스트 입니다 테스트 입니다")

  console.log(data);

  // 기본 ogImage 설정
  const defaultOgImage = '/assets/blog/default/default_og_image.png';
  const defaultCoverImage = '/assets/blog/default/default_cover_image.png';

  if (!data.coverImage || !data.coverImage.url) {
    data.coverImage = { defaultCoverImage };
  }

  if (!data.ogImage || !data.ogImage.url) {
    data.ogImage = { defaultOgImage };
  }

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: 'ayu-dark',
      keepBackground: true,
    })
    .use(rehypeStringify)
    .process(content);

  return String(result);
}
