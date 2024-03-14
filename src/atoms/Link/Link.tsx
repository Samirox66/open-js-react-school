import Css from "./Link.module.css";

export interface LinkProps {
    label: string;
    href: string;
}

export default function Link({ label, href }: LinkProps) {
    return (
        <a className={Css.link} href={href}>
            {label}
        </a>
    );
}
