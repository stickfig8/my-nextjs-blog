import LightIcon from '@/assets/svgs/light_mode.svg';
import DarkIcon from '@/assets/svgs/dark_mode.svg';
import SystemIcon from '@/assets/svgs/system_mode.svg';
import { ThemeOption } from "@/config/types";

const icons: Record<ThemeOption, React.FC<React.SVGProps<SVGSVGElement>>> = {
    light: LightIcon,
    dark: DarkIcon,
    system: SystemIcon
};

type Props = {
    name: ThemeOption
}

export default function ThemeIcon({name} : Props) {
    const Icon = icons[name];

    return(
        <Icon className="w-6 h-6 stroke-current "/>
    );
}