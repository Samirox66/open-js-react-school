import { useGetCommentsQuery } from "../../app/apis/commentsApi";
import { ColoredText, Error, H3Title, Loader } from "../../atoms";
import { Review } from "../../molecules";
import Css from "./ReviewsBlock.module.css";
import Slider from "react-slick";

export default function ReviewsBlock() {
    const { isLoading, data: reviewsData, isError } = useGetCommentsQuery();
    const reviews = reviewsData?.comments?.slice(0, 6)?.map((review, index) => (
        <li key={index}>
            <Review review={review.body} username={review.user.username} />
        </li>
    ));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    };
    return (
        <section className={Css.block}>
            <div className={Css.title}>
                <H3Title color="dark">
                    <ColoredText color="#6C5FBC">Customer Say</ColoredText>
                </H3Title>
            </div>
            <div className={Css.reviews}>
                <Error isError={isError}>
                    Error loading comments, try to reload page
                </Error>
                <Loader isLoading={isLoading} />
                {reviews && <Slider {...settings}>{reviews}</Slider>}
            </div>
        </section>
    );
}
