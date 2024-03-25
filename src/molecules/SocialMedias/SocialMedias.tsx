import Css from "./SocialMedias.module.css";
import insta from "./imgs/instagram.png";
import facebook from "./imgs/facebook.png";
import inImage from "./imgs/in.png";
import twitter from "./imgs/twitter.png";
import { Logo } from "../../atoms";

export default function SocialMedias() {
    const socialMedias = [insta, facebook, inImage, twitter].map(
        (value, index) => (
            <li key={index} className={Css.element}>
                <Logo imageSrc={value} alt={value} />
            </li>
        )
    );

    return <ul className={Css.list}>{socialMedias}</ul>;
}
