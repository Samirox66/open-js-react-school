import { H6Title } from "../../atoms";
import Css from "./Dish.module.css";

export interface DishProps {
    title: string;
    status: "On The Way" | "Delivered" | "Cancelled";
    imageSrc: string;
    time: string;
}

export default function Dish({ title, status, imageSrc, time }: DishProps) {
    let statusClasses = Css.status;
    if (status == "Cancelled") {
        statusClasses += ` ${Css.cancelled}`;
    }
    return (
        <div className={Css.card}>
            <div className={Css.dish}>
                <img alt="dish" src={imageSrc} />
                <div>
                    <H6Title>{title}</H6Title>
                    <p className={statusClasses}>{status}</p>
                </div>
            </div>
            <p className={Css.time}>{time}</p>
        </div>
    );
}
