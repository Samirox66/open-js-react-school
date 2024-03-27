import { Link } from "react-router-dom";
import { H4Title, Rating, Tags, User } from "../../atoms";
import Css from "./ArticlePreview.module.css";
import TextClamp from "react-string-clamp";

export interface ArticlePreviewProps {
    title: string;
    reactions: number;
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
            <Link className={Css.card} to={`/blog/${id}/${userId}`}>
                <H4Title>{title}</H4Title>
                <div className={Css.info}>
                    <div className={Css.horizontalContainer}>
                        <User userId={userId} />
                        <Rating rating={rating} />
                    </div>
                    <Tags tags={tags} />
                </div>
                <TextClamp className={Css.paragraph} text={text} lines={3} />
            </Link>
        </div>
    );
}
