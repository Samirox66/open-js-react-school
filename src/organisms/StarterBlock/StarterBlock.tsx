import { Dish, StartWithButtons } from "../../molecules";
import Css from "./StarterBlock.module.css";

import lines1 from "./imgs/lines1.png";
import lines2 from "./imgs/lines2.png";
import arrow from "./imgs/arrow.png";
import food from "./imgs/Food.png";
import graph from "./imgs/Graph.png";
import { dishesMeta } from "../PurchaseDashboard/data";

export default function StarterBlock() {
    const dish = dishesMeta.find((dish) => dish.title == "Chicken Hell");
    return (
        <section className={Css.starter}>
            <StartWithButtons />
            <section className={Css.imgs}>
                <div className={Css.dishContainer}>
                    <img src={lines1} />
                    <div className={Css.dish}>
                        {dish && (
                            <Dish
                                title={dish.title}
                                status={dish.status}
                                imageSrc={dish.imageSrc}
                                time={dish.time}
                            />
                        )}
                    </div>
                </div>
                <div className={Css.foodContainer}>
                    <img src={food} alt="dish with food" />
                    <img src={arrow} className={Css.arrow} />
                </div>
                <div className={Css.graphContainer}>
                    <img className={Css.graph} alt="Graphic" src={graph} />
                    <img src={lines2} />
                </div>
            </section>
        </section>
    );
}
