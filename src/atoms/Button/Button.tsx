import { MouseEventHandler } from "react";
import Css from "./Button.module.css";

interface ButtonProps {
    type: "primary" | "secondary";
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ type, label, onClick }: ButtonProps) {
    const classes = `button ${type == "primary" ? Css.primary : Css.secondary}`;

    return (
        <button className={classes} onClick={onClick}>
            {label}
        </button>
    );
}
