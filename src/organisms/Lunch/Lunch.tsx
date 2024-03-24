import { useGetRecipesByMealTypeQuery } from "../../app/apis/recipesApi";
import { ColoredText, Divider, H3Title } from "../../atoms";
import { DishInfo } from "../../molecules";
import Css from "./Lunch.module.css";

export default function Lunch() {
    const { isLoading, data: dishesData } = useGetRecipesByMealTypeQuery();

    const numberOfDishesToShow = 3;

    let dishes: JSX.Element[] | undefined = undefined;
    if (dishesData) {
        dishes = [...dishesData.recipes]
            ?.sort((a, b) => b.rating - a.rating)
            .slice(0, numberOfDishesToShow)
            .map((dish, index) => (
                <DishInfo
                    key={index}
                    time={dish.prepTimeMinutes}
                    rating={dish.rating}
                    name={dish.name}
                    tags={dish.tags}
                    imageSrc={dish.image}
                />
            ));
    }
    return (
        <section className={Css.block} id="recipes">
            <H3Title color="dark">
                Our Top <ColoredText color="#6C5FBC">Lunch</ColoredText>
            </H3Title>
            {isLoading && <p>Loading...</p>}
            <div className={Css.lunchesContainer}>{dishes}</div>
            <Divider />
        </section>
    );
}
