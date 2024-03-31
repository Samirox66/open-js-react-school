import { ColoredText, H3Title } from "../../atoms";
import { Accordion } from "../../molecules";
import Css from "./FAQBlock.module.css";

import lines from "./imgs/lines.png";

export default function FAQBlock() {
    return (
        <section className={Css.block} id="faq">
            <div className={Css.title}>
                <H3Title color="dark">
                    Frequently Asked{" "}
                    <ColoredText color="#6C5FBC">Questions</ColoredText>
                </H3Title>
                <img src={lines} className={Css.lines} />
            </div>
            <Accordion
                options={[
                    {
                        question: "How long does delivery take?",
                        answer: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
                    },
                    {
                        question: "How Does It Work ?",
                        answer: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
                    },
                    {
                        question: "How does your food delivery service work?",
                        answer: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
                    },
                    {
                        question: "What payment options do you accept?",
                        answer: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
                    },
                    {
                        question: "Do you offer discounts or promotions?",
                        answer: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
                    },
                ]}
            />
        </section>
    );
}
