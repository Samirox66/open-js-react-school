import Css from "./Review.module.css";

interface ReviewProps {
    username?: string;
    review: string;
}

export default function Review({ username, review }: ReviewProps) {
    return (
        <div className={Css.review}>
            {username && (
                <div className={Css.userContainer}>
                    <p className={Css.username}>{username}</p>
                    <img />
                </div>
            )}
            <p className={Css.reviewText}>{review}</p>
        </div>
    );
}
