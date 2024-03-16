import { PropsWithChildren } from "react";
import Css from "./H5Title.module.css";

interface H5TitleProps extends PropsWithChildren {}

export default function H5Title({ children }: H5TitleProps) {
    return <h5 className={Css.title}>{children}</h5>;
}
