import TopIcon from '@/assets/svgs/arrow_up.svg';
import BottomIcon from '@/assets/svgs/arrow_down.svg';

import { ScrollOption } from "@/config/iconTypes";

const icons: Record<ScrollOption, React.FC<React.SVGProps<SVGSVGElement>>> = {
    top: TopIcon,
    bottom: BottomIcon,
};

type Props = {
    width: number;
    height: number;
    destination: ScrollOption;
}

export default function ScrollIcon({destination, width, height} : Props) {
    const Icon = icons[destination];

    return(
        <Icon width={width} height={height} className="stroke-current "/>
    );
}