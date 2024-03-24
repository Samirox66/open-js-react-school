import { Link } from "react-router-dom";
import { H4Title, Rating, Tags } from "../../atoms";
import Css from "./ArticlePreview.module.css";
import TextClamp from "react-string-clamp"

export interface ArticlePreviewProps {
    title: string;
    reactions: number;
    body: string;
    tags: string[];
    id: number;
}

export default function ArticlePreview({
    title,
    reactions: rating,
    body: text,
    tags,
    id,
}: ArticlePreviewProps) {
    return (
        <div className={Css.container}>
            <Link className={Css.card} to={`/blog/${id}`}>
                <H4Title>{title}</H4Title>
                <div className={Css.horizontalContainer}>
                    <Tags tags={tags} />
                    <Rating rating={rating} />
                </div>
                <TextClamp className={Css.paragraph} text={text} lines={3} />
            </Link>
        </div>
    );
}
