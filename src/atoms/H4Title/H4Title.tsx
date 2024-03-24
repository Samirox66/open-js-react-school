import { PropsWithChildren } from "react";
import Css from "./H4Title.module.css";

export default function H4Title({ children }: PropsWithChildren) {
    return <h4 className={Css.title}>{children}</h4>;
}
