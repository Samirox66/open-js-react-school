import { Link, LinkProps } from "../../atoms";
import Css from "./Menu.module.css";

interface MenuProps {
    links: LinkProps[];
}

export default function Menu({ links }: MenuProps) {
    const linksComponents = links.map((link, index) => (
        <Link key={index} href={link.href} label={link.label} />
    ));

    return <nav className={Css.nav}>{linksComponents}</nav>;
}
