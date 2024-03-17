import { Button, ColoredText, H1Title, Paragraph } from "../../atoms";
import Css from "./StartWithButtons.module.css";

export default function StartWithButtons() {
    return (
        <section className={Css.block}>
            <div className={Css.overContainer}>
                <div className={Css.divider} />
                <p className={Css.over}>Over 1000 users</p>
            </div>
            <div className={Css.textContainer}>
                <H1Title>
                    Enjoy Foods All Over The{" "}
                    <ColoredText color="#5C4EAE">World</ColoredText>
                </H1Title>
                <Paragraph type="small_gray">
                    EatLy help you set saving goals, earn cash back offers, Go
                    to disclaimer for more details and get paychecks up to two
                    days early. Get a{" "}
                    <ColoredText color="#6155AE">$20 bonus.</ColoredText>
                </Paragraph>
            </div>
            <div className={Css.buttonsContainer}>
                <Button type="primary">Get Started</Button>
                <Button type="secondary">Go Pro</Button>
            </div>
        </section>
    );
}
