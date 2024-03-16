import { PropsWithChildren, ReactNode } from "react";

import Css from "./Slider.module.css";

export default function Slider({ children }: PropsWithChildren) {
    return <ul className={Css.slider}>{children}</ul>;
}
