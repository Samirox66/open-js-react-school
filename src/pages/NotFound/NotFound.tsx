import { H3Title, Link } from "../../atoms";
import Css from "./NotFound.module.css";

export default function NotFound() {
    return (
        <main className={Css.page}>
            <H3Title color="dark">Page was not found</H3Title>
            <Link label="Go to main page" href="/open-js-react-school" />
        </main>
    );
}
