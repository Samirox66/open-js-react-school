import { PropsWithChildren } from "react";

import Css from "./H6Title.module.css";

export default function H6Title({ children }: PropsWithChildren) {
    return <h6 className={Css.title}>{children}</h6>;
}
