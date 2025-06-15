import LeftIcon from '@/assets/svgs/arrow_left.svg';
import RightIcon from '@/assets/svgs/arrow_right.svg';

import { AdjacentOption } from "@/config/iconTypes";

const icons: Record<AdjacentOption, React.FC<React.SVGProps<SVGSVGElement>>> = {
    next: LeftIcon,
    prev: RightIcon,
};

type Props = {
    width: number;
    height: number;
    destination: AdjacentOption;
}

export default function AdjacentIcon({destination, width, height} : Props) {
    const Icon = icons[destination];

    return(
        <Icon width={width} height={height} className="stroke-current"/>
    );
}