import Container from "@/app/_components/container";
import { FaServer, FaGithub, FaReact } from 'react-icons/fa'; // Font Awesome 아이콘 불러오기

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center">
          <h3 className="text-lg lg:text-lg font-bold tracking-tighter leading-tight text-center lg:text-left mb-4 lg:mb-0 lg:pr-4 lg:w-1/2">
            <span className="text-gray-600">This blog, hosted on a </span>
            <span className="text-pink-600 inline-flex items-center">
              <FaServer className="mr-2" />
              private server
            </span>
            <span className="text-gray-600">, is built with </span>
            <span className="text-slate-900 inline-flex items-center">
              <FaReact className="mr-2" />
              Next.js
            </span>
            <span className="text-gray-600"> and deployed automatically using </span>
            <span className="text-indigo-900 inline-flex items-center">
              <FaGithub className="mr-2" />
              GitHub Actions
            </span>
            <span className="text-gray-600">.</span>
            <span className="block mt-4 text-gray-600">
              The default font is <span className="text-blue-600">MaruBuri</span>, and code blocks are styled with <span className="text-green-600 font-d2coding">D2Coding</span>.
            </span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/snulifeo2/devwize-nextjs"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-8 lg:px-6 duration-200 transition-colors mb-4 lg:mb-0"
            >
              Github page of this Blog
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
