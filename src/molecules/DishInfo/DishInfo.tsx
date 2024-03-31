import { useState } from "react";
import { H5Title, Rating } from "../../atoms";
import Css from "./DishInfo.module.css";

import favorite from "./imgs/favorite.png";

export interface DishInfoProps {
    name: string;
    tags: string[];
    time: number;
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
    const [hovered, setHovered] = useState(false);

    const onMouseEnter = () => {
        setHovered(true);
    };

    const onMouseLeave = () => {
        setHovered(false);
    };

    const tagsElements = tags.map((tag, index) => (
        <span className={Css.tag} key={index}>
            {tag}
        </span>
    ));

    return (
        <div
            className={Css.dishInfo}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img className={Css.image} src={imageSrc} alt={imageSrc} />
            <div className={Css.dishContainer}>
                <div className={Css.container}>
                    <p className={Css.tags}>{tagsElements}</p>
                    <H5Title>{name}</H5Title>
                    <div className={Css.horizontalContainer}>
                        <p className={Css.time}>{time}min •</p>
                        <Rating rating={rating} />
                    </div>
                </div>

                {hovered && (
                    <button className={Css.favorite} aria-label="Make favorite">
                        <img src={favorite} />
                    </button>
                )}
            </div>
        </div>
    );
}
