import { Divider, Logo } from "../../atoms";
import Css from "./Footer.module.css";

import logo from "../../resources/imgs/logo.png";
import { Menu, SocialMedias } from "../../molecules";

export default function Footer() {
    return (
        <footer className={Css.footer}>
            <div className={Css.horizontalContainer}>
                <Logo imageSrc={logo} alt="logo" />
                <Menu
                    links={[
                        { label: "Recipes", href: "#" },
                        { label: "FAQ", href: "#" },
                        { label: "Blog", href: "#" },
                    ]}
                />
            </div>
            <Divider />
            <div className={`${Css.horizontalContainer} ${Css.margin}`}>
                <p className={Css.rights}>© 2023 EATLY All Rights Reserved.</p>
                <SocialMedias />
            </div>
        </footer>
    );
}
