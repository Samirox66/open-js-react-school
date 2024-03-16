import { Button, ColoredText, Divider, H2Title } from "../../atoms";
import Css from "./DownloadApp.module.css";

import mobile from "./imgs/Mobile.png";
import arrow from "./imgs/Arrow.png";

export default function DownloadApp() {
    const qualities = [
        "Premium quality food is made with ingredients that are packed with essential vitamins, minerals.",
        "These foods promote overall wellness by support healthy digestion and boosting immunity",
    ].map((quality, index) => (
        <li key={index}>
            <p className={Css.quality}>{quality}</p>
        </li>
    ));
    return (
        <section className={Css.block}>
            <div className={Css.container}>
                <img src={mobile} alt="Mobile" className={Css.mobile} />
                <section className={Css.content}>
                    <H2Title>
                        Premium{" "}
                        <ColoredText color="#6C5FBC">Quality</ColoredText> For
                        Your Health
                    </H2Title>
                    <ul className={Css.qualities}>{qualities}</ul>
                    <Button type="primary" onClick={() => {}}>
                        Download
                        <img src={arrow} />
                    </Button>
                </section>
            </div>
            <Divider />
        </section>
    );
}
