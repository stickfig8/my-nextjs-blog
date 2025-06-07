import Image from "next/image";

type Props = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export default function PostImage({src, alt, width = 600, height = 400} : Props) {
    return(
        <span className={`block text-center my-3`}>
            <Image src={src} alt={alt} width={width} height={height} className="rounded w-full h-auto mb-3" />
            <span className="text-[var(--miniText)] underline underline-offset-4">
                {alt}
            </span>
        </span>
    );
}