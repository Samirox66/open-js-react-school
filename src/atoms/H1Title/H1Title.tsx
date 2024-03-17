import { PropsWithChildren } from "react";
import Css from "./H1Title.module.css";

export default function H1Title({ children }: PropsWithChildren) {
    return <h1 className={Css.title}>{children}</h1>;
}
