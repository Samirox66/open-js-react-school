import Css from "./Link.module.css";
import { Link as RLink } from "react-router-dom";

export interface LinkProps {
    label: string;
    href: string;
}

export default function Link({ label, href }: LinkProps) {
    return (
        <RLink className={Css.link} to={href}>
            {label}
        </RLink>
    );
}
