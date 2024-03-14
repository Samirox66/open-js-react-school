import Css from "./Paragraph.module.css";

interface ParagraphProps {
    paragraph: string;
    type: "lightgray";
}

export default function Paragraph({ paragraph, type }: ParagraphProps) {
    let classNames;
    switch (type) {
        case "lightgray":
            classNames = Css.lightgray;
            break;

        default:
            classNames = Css.lightgray;
            break;
    }
    return <p className={classNames}>{paragraph}</p>;
}
