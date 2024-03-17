import { ColoredText, H3Title } from "../../atoms";
import { Review, Slider } from "../../molecules";
import Css from "./ReviewsBlock.module.css";

export default function ReviewsBlock() {
    const review = "I cannot believe how I found you, this is so pretty.";
    const reviews = Array(2)
        .fill(review)
        .map((review, index) => (
            <li key={index}>
                <Review review={review} />
            </li>
        ));
    return (
        <section className={Css.block}>
            <H3Title color="dark">
                <ColoredText color="#6C5FBC">Customer Say</ColoredText>
            </H3Title>
            <div className={Css.reviews}>
                <Review username="@omottley2h" review={review} />
                <Slider>{reviews}</Slider>
            </div>
        </section>
    );
}
