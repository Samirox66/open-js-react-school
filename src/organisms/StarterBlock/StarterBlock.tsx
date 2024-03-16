import { StartWithButtons } from "../../molecules";
import Css from "./StarterBlock.module.css";

export default function StarterBlock() {
    return (
        <section className={Css.starter}>
            <StartWithButtons />
            <section></section>
        </section>
    );
}
