import { H3Title, Paragraph } from "../../atoms";
import Css from "./Feature.module.css";

export interface FeatureProps {
    title: string;
    paragraph: string;
}

export default function Feature({ title, paragraph }: FeatureProps) {
    return (
        <div className={Css.feature}>
            <H3Title color={"light"}>{title}</H3Title>
            <Paragraph type="lightgray">{paragraph}</Paragraph>
        </div>
    );
}
