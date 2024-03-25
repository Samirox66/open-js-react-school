import { ColoredText, Divider, H2Title } from "../../atoms";
import { Dish } from "../../molecules";
import Css from "./PurchaseDashboard.module.css";
import { dishesMeta } from "./data";
import purchase from "./imgs/purchase.png";

export default function PurchaseDashboard() {
    const dishes = dishesMeta.map((dish, index) => (
        <li key={index} className={Css.dish}>
            <Dish
                time={dish.time}
                status={dish.status}
                title={dish.title}
                imageSrc={dish.imageSrc}
            />
        </li>
    ));
    return (
        <section className={Css.block}>
            <div className={Css.content}>
                <div className={Css.container}>
                    <H2Title>
                        Control{" "}
                        <ColoredText color="#6C5FBC">Purchases</ColoredText> Via
                        Dashboard
                    </H2Title>
                    <ul className={Css.dishes}>{dishes}</ul>
                </div>
                <img className={Css.img} src={purchase} alt="statistics" />
            </div>
            <Divider />
        </section>
    );
}
