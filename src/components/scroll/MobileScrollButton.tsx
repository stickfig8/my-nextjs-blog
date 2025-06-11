import ScrollIcon from "../icons/ScrollIcon";
import { ScrollOption } from "@/config/iconTypes";

type Props = {
    onClick: () => void;
    destination: ScrollOption;
}

export default function MobileScrollButton({onClick, destination} : Props) {
    return (
        <button onClick={onClick} className="flex justify-center items-center cursor-pointer text-[var(--foreground)] hover:text-[var(--mainText)] active:scale-95 active:brightness-90" >
            <ScrollIcon width={47} height={47} destination={destination} />
        </button>
    )
}