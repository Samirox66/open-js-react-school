import { Link } from "react-router-dom";
import { H4Title, Rating, Tags } from "../../atoms";
import { User } from "..";
import Css from "./ArticlePreview.module.css";
import TextClamp from "react-string-clamp";

export interface ArticlePreviewProps {
    title: string;
    reactions: {
        likes: number;
        dislikes: number;
    };
    body: string;
    tags: string[];
    id: number;
    userId: number;
}

export default function ArticlePreview({
    title,
    reactions: rating,
    body: text,
    tags,
    id,
    userId,
}: ArticlePreviewProps) {
    return (
        <div className={Css.container}>
            <Link className={Css.card} to={`${id}/${userId}`}>
                <H4Title>{title}</H4Title>
                <div className={Css.info}>
                    <div className={Css.horizontalContainer}>
                        <User userId={userId} />
                        <Rating rating={rating.likes} />
                    </div>
                    <Tags tags={tags} />
                </div>
                <TextClamp className={Css.paragraph} text={text} lines={3} />
            </Link>
        </div>
    );
}
