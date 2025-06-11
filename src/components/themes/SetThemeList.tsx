import { ThemeOption } from "@/config/iconTypes";
import { useTheme } from "next-themes";

type Props = {
    name: ThemeOption;
    onClick: (theme:ThemeOption) => void;
}

export default function SetThemeList({name, onClick}: Props) {
    const { theme } = useTheme();
    const activated = theme === name ? "· " : "";
    const label = activated + name.charAt(0).toUpperCase() + name.slice(1);
    return(
        <li onClick={() => onClick(name)}
            className="cursor-pointer text-[var(--oppoForeground)] rounded-md px-3 py-2 hover:opacity-50 hover:brightness-70 hover:backdrop-blur-md text-right ">
            {label}
        </li>
    )
}