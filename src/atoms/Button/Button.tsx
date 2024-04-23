import { MouseEventHandler, PropsWithChildren } from "react";
import Css from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
    type: "primary" | "secondary";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    style?: React.CSSProperties;
}

export default function Button({
    type,
    children,
    onClick,
    style,
}: ButtonProps) {
    const classes = `${Css.button} ${
        type == "primary" ? Css.primary : Css.secondary
    }`;

    return (
        <button style={style} className={classes} onClick={onClick}>
            {children}
        </button>
    );
}
