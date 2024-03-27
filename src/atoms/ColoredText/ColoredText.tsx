import { PropsWithChildren } from "react";

interface ColoredTextProps extends PropsWithChildren {
    color: string;
}

export default function ColoredText({ children, color }: ColoredTextProps) {
    return <span style={{ color }}>{children}</span>;
}
