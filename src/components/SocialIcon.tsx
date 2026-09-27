import { iconMap } from "../icons";

import { createElement } from "react";

type SocialTheme = "white" | "black";

interface SocialIconProps {
  social: string;
  theme?: SocialTheme;
  href?: string;
}

export default function SocialIcon({ social, theme = "white", href = "#" }: SocialIconProps) {
    const render = iconMap[social];
   
    return (
        <a href={href} className={`${theme == "white" ? "bg-white text-theme-black" : "bg-theme-black text-theme-green"} rounded-full max-h-8 max-w-8 p-2`}>
            {render && createElement(render, { size: 18 })}
        </a>
    );
}