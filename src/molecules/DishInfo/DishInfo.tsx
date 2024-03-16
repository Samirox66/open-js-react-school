import { H5Title, Rating } from "../../atoms";
import { dishesMeta } from "../../organisms/Lunch/data";
import Css from "./DishInfo.module.css";

export interface DishInfoProps {
    name: string;
    tags: string[];
    time: string;
    rating: number;
    imageSrc: string;
}

export default function DishInfo({
    name,
    tags,
    time,
    rating,
    imageSrc,
}: DishInfoProps) {
    return (
        <div className={Css.dishInfo}>
            <img src={imageSrc} alt={imageSrc} />
            <div className={Css.container}>
                <p className={Css.tag}>{tags[0]}</p>
                <H5Title>{name}</H5Title>
                <div className={Css.horizontalContainer}>
                    <p className={Css.time}>{time}</p>
                    <Rating rating={rating} />
                </div>
            </div>
        </div>
    );
}
