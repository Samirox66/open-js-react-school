import { PropsWithChildren } from "react";
import Css from "./H3Title.module.css";

interface H3Title extends PropsWithChildren {
    color: "light" | "dark";
}

export default function H3Title({ color, children }: H3Title) {
    const className = `${Css.title} ${color == "dark" ? Css.dark : Css.light}`;

    return <h3 className={className}>{children}</h3>;
}
