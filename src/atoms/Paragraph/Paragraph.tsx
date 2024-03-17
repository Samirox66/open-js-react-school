import { PropsWithChildren } from "react";
import Css from "./Paragraph.module.css";

interface ParagraphProps extends PropsWithChildren {
    type: "lightgray" | "big_gray" | "small_gray";
}

export default function Paragraph({ children, type }: ParagraphProps) {
    let classNames;
    switch (type) {
        case "lightgray":
            classNames = Css.lightgray;
            break;
        case "big_gray":
            classNames = Css.bigGray;
            break;
        case "small_gray":
            classNames = Css.smallGray;
            break;
        default:
            classNames = Css.lightgray;
            break;
    }
    return <p className={classNames}>{children}</p>;
}
