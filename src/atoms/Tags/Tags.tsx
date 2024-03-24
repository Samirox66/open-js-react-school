import Css from "./Tags.module.css";

interface TagsProps {
    tags: string[];
}

export default function Tags({ tags }: TagsProps) {
    return (
        <p className={Css.tags}>{tags.map((tag) => "#" + tag).join(", ")}</p>
    );
}
