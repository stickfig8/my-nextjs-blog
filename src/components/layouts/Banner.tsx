export default function Banner() {
    return(
        <div className="active:scale-99 active:brightness-80 transition-transform duration-100">
            <a href="https://github.com/stickfig8/my-nextjs-blog" target="_blank" className="cursor-pointer ">
                <div className="font-bold text-4xl pb-3">Hyeongyu Kim&apos;s blog</div>
                <div className="text-xl text-[var(--mainText)]">Front-end developer</div>
                <div className="text-md text-[var(--subText)] mb-10">Use React/Next.js, Typescript, and Tailwind CSS to consider better UX/UI and services. </div>
            </a>
        </div>
    );
}