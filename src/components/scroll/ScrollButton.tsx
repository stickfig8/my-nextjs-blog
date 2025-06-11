import ScrollIcon from "../icons/ScrollIcon";
import { ScrollOption } from "@/config/iconTypes";

type Props = {
    onClick: () => void;
    destination: ScrollOption;
}

export default function ScrollButton({onClick, destination} : Props) {
    return (
        <button onClick={onClick} className="flex justify-center items-center cursor-pointer text-[var(--subText)] hover:text-[var(--foreground)] active:scale-95 active:brightness-90" >
            <ScrollIcon width={21} height={21} destination={destination} />
        </button>
    )
}