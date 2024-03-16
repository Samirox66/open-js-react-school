import { DishProps } from "../../molecules";
import chicken from "./imgs/chicken.png";
import swe from "./imgs/swe.png";
import fish from "./imgs/fish.png";

export const dishesMeta: DishProps[] = [
    {
        title: "Chicken Hell",
        time: "3:09 PM",
        status: "On The Way",
        imageSrc: chicken,
    },
    {
        title: "Swe Dish",
        time: "Yesterday",
        status: "Delivered",
        imageSrc: swe,
    },
    {
        title: "Chicken Hell",
        time: "Yesterday",
        status: "Cancelled",
        imageSrc: fish,
    },
];
