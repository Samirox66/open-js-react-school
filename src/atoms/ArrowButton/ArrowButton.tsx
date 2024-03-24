import Css from "./ArrowButton.module.css";

import arrow from "./imgs/arrow.svg";

interface ArrowButtonProps {
    direction: "left" | "right";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export default function ArrowButton({
    direction,
    onClick,
    disabled,
}: ArrowButtonProps) {
    const className =
        Css.button + " " + (direction == "left" ? Css.rotate : "");
    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}
            aria-label={
                direction == "left" ? "previous articles" : "next articles"
            }
        >
            <img src={arrow} alt={direction == "left" ? "previous" : "next"} />
        </button>
    );
}
