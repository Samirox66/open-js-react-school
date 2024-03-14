import { H3Title, Paragraph } from "../../atoms";
import Css from "./Feature.module.css";

export interface FeatureProps {
    title: string;
    paragraph: string;
}

export default function Feature({ title, paragraph }: FeatureProps) {
    return (
        <div className={Css.feature}>
            <H3Title title={title} />
            <Paragraph paragraph={paragraph} type="lightgray" />
        </div>
    );
}
