import { PropsWithChildren } from "react";

interface ColoredTextProps extends PropsWithChildren {
    color: string;
}

export default function ColoredText({ children, color }: ColoredTextProps) {
    return (
        <span data-testid="colored-text" style={{ color }}>
            {children}
        </span>
    );
}
