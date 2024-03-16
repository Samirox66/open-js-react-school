import { PropsWithChildren } from "react";
import Css from "./H2Title.module.css";

export default function H2Title({ children }: PropsWithChildren) {
    return <h2 className={Css.title}>{children}</h2>;
}
