import { MouseEventHandler, PropsWithChildren } from "react";
import Css from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
    type: "primary" | "secondary";
    width?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
    type,
    children,
    onClick,
    width,
}: ButtonProps) {
    const classes = `${Css.button} ${
        type == "primary" ? Css.primary : Css.secondary
    }`;

    return (
        <button style={{ width }} className={classes} onClick={onClick}>
            {children}
        </button>
    );
}
