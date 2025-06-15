import type { MDXComponents } from "mdx/types";
import PostImage from "./posts/PostImage";

export const MyMdxComponent : MDXComponents = {
  h1: (props) => <h1 className="text-2xl font-bold my-6" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold mt-6 mb-4" {...props} />,
  h3: (props) => <h3 className="text-xl font-bold mt-9 mb-2" {...props} />,
  p: (props) => <p className="text-lg text-base leading-7 text-[var(--mainText)] mb-4 leading-10" {...props} />,
  code: (props) => (
    <code className="bg-[var(--codeBackground)] text-[var(--codeForeground)] px-1 py-0.5 rounded-sm text-sm py-1 mx-1 font-mono tracking-tight" {...props} />
  ),
  pre: (props) => (
    <pre className="overflow-x-auto my-3 text-sm leading-relaxed" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-[var(--miniText)] pl-4 italic text-[var(--subText)] my-4 break-words"
      style={{ wordBreak: 'break-word' }}
      {...props}
    />
  ),
  mark: (props) => (<mark className="bg-[var(--markBackground)] text-[var(--markForeground)] rounded-sm px-1 text-base mx-0.3" {...props}/>),
  hr: () => <hr className="my-8 border-t border-[var(--subText)]" />,
  ul: (props) => <ul className="list-disc pl-6 mb-4" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 my-4" {...props} />,
  li: (props) => <li className="my-1 text-base mb-3 leading-8 text-[var(--mainText)]" {...props} />,
  a: (props) => <a className="underline text-[var(--links)]" {...props} />,
  img: (props) => (<PostImage {...props} />)

};