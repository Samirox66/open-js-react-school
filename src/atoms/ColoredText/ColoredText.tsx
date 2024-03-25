import { PropsWithChildren } from "react";
import Css from "./ColoredText.module.css";

interface ColoredTextProps extends PropsWithChildren {
    color: string;
}

export default function ColoredText({ children, color }: ColoredTextProps) {
    return <span style={{ color }}>{children}</span>;
}
