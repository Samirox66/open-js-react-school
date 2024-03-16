import { Fragment } from "react/jsx-runtime";
import { Feature } from "../../molecules";
import Css from "./Features.module.css";
import { featuresMeta } from "./data";

export default function Features() {
    const features = featuresMeta.map((feature, index) => (
        <Fragment key={index}>
            <Feature title={feature.title} paragraph={feature.paragraph} />
            {index != featuresMeta.length - 1 && (
                <div className={Css.divider}></div>
            )}
        </Fragment>
    ));

    return <section className={Css.features}>{features}</section>;
}
