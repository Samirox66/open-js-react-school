import { ColoredText, Divider, H3Title } from "../../atoms";
import { DishInfo } from "../../molecules";
import Css from "./Lunch.module.css";
import { dishesMeta } from "./data";

export default function Lunch() {
    const dishes = dishesMeta.map((dish, index) => (
        <DishInfo
            key={index}
            time={dish.time}
            rating={dish.rating}
            name={dish.name}
            tags={dish.tags}
            imageSrc={dish.imageSrc}
        />
    ));
    return (
        <section className={Css.block}>
            <H3Title color="dark">
                Our Top <ColoredText color="#6C5FBC">Lunch</ColoredText>
            </H3Title>
            <div className={Css.lunchesContainer}>{dishes}</div>
            <Divider />
        </section>
    );
}
