import Css from "./H3Title.module.css";

interface H3Title {
    title: string;
}

export default function H3Title({ title }: H3Title) {
    return <h3 className={Css.title}>{title}</h3>;
}
