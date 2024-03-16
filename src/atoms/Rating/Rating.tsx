import Css from "./Rating.module.css";
import star from "./imgs/Star.png";

interface RatingProps {
    rating: number;
}

export default function Rating({ rating }: RatingProps) {
    return (
        <div className={Css.rating}>
            <img src={star} alt="rating" />
            <p className={Css.text}>{rating}</p>
        </div>
    );
}
