import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import remarkBreaks from "remark-breaks"; // 추가된 부분
import matter from "gray-matter";

export default async function markdownToHtml(markdown: string) {
  /*

  matter(markdown):
  
  gray-matter 라이브러리를 사용하여 markdown 문자열을 파싱합니다.
  gray-matter는 마크다운 파일의 앞부분에 있는 front matter를 추출하고, 나머지 마크다운 콘텐츠와 분리해줍니다.
  front matter는 보통 YAML 형식으로 작성되며, 메타데이터(예: 제목, 날짜, 태그 등)를 포함합니다.

  { data, content }:

  matter(markdown)의 반환값은 객체이며, 이 객체에는 data와 content 속성이 포함됩니다.
  data: 파싱된 front matter의 내용을 포함하는 객체입니다. 예를 들어, 마크다운 파일의 메타데이터가 들어 있습니다.
  content: front matter를 제외한 실제 마크다운 콘텐츠입니다.
  */
  const { data, content } = matter(markdown);


  // 기본 ogImage 설정
  const defaultOgImage = "/assets/blog/default/default_og_image.png";
  const defaultCoverImage = "/assets/blog/default/default_cover_image.png";

  if (!data.coverImage || !data.coverImage.url) {
    data.coverImage = { defaultCoverImage };
  }

  if (!data.ogImage || !data.ogImage.url) {
    data.ogImage = { defaultOgImage };
  }

  /*
  unified():

  unified는 콘텐츠를 처리하기 위한 파이프라인을 생성하는 함수입니다.
  unified 인스턴스를 생성합니다.
  .use(remarkParse):

  remarkParse 플러그인을 사용하여 마크다운 콘텐츠를 파싱합니다.
  마크다운 문자열을 추상 구문 트리(AST)로 변환합니다.
  .use(remarkRehype):

  remarkRehype 플러그인을 사용하여 remark AST를 rehype AST로 변환합니다.
  rehype AST는 HTML로 변환하기 쉽게 해줍니다.
  .use(rehypePrettyCode, { theme: "ayu-dark", keepBackground: true }):

  rehypePrettyCode 플러그인을 사용하여 코드 블록을 하이라이팅합니다.
  옵션으로 theme와 keepBackground를 설정합니다:
  theme: "ayu-dark": 코드 하이라이팅에 'ayu-dark' 테마를 사용합니다.
  keepBackground: true: 코드 블록의 배경 색상을 유지합니다.
  .use(rehypeStringify):

  rehypeStringify 플러그인을 사용하여 rehype AST를 HTML 문자열로 변환합니다.
  .process(content):

  앞서 설정한 플러그인들을 사용하여 content를 처리합니다.
  content는 파싱된 마크다운 콘텐츠입니다.
  */
 
  const result = await unified()
    .use(remarkParse)
    .use(remarkBreaks) // 추가된 부분
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "ayu-dark",
      keepBackground: true,
    })
    .use(rehypeStringify)
    .process(content);

  return String(result);
}


