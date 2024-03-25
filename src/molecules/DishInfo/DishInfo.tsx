import { useState } from "react";
import { H5Title, Rating } from "../../atoms";
import Css from "./DishInfo.module.css";

import favorite from "./imgs/favorite.png";

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
    const [hovered, setHovered] = useState(false);

    const onMouseEnter = () => {
        setHovered(true);
    };

    const onMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className={Css.dishInfo}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img src={imageSrc} alt={imageSrc} />
            <div className={Css.dishContainer}>
                <div className={Css.container}>
                    <p className={Css.tag}>{tags[0]}</p>
                    <H5Title>{name}</H5Title>
                    <div className={Css.horizontalContainer}>
                        <p className={Css.time}>{time}</p>
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
