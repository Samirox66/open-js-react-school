import { PropsWithChildren } from "react";
import Css from "./Error.module.css";

interface ErrorProps extends PropsWithChildren {
    isError: boolean;
}

export default function Error({ isError, children }: ErrorProps) {
    if (!isError) {
        return;
    }

    return <p className={Css.error}>{children}</p>;
}
