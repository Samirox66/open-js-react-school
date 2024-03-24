import { Link } from "react-router-dom";
import { H4Title, Rating, Tags } from "../../atoms";
import Css from "./ArticlePreview.module.css";

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
                <p className={Css.paragraph}>{text}</p>
            </Link>
        </div>
    );
}
