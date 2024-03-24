import Css from "./Review.module.css";

import quote from "./imgs/quote.svg";

interface ReviewProps {
    username?: string;
    review: string;
}

export default function Review({ username, review }: ReviewProps) {
    return (
        <div className={Css.review}>
            <div className={Css.container}>
                {username && (
                    <div className={Css.userContainer}>
                        <p className={Css.username}>@{username}</p>
                        <img src={quote} />
                    </div>
                )}
                <p className={Css.reviewText}>{review}</p>
            </div>
        </div>
    );
}
