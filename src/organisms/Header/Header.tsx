import { Divider, Logo } from "../../atoms";
import { Menu } from "../../molecules";

import Css from "./Header.module.css";
import logo from "../../resources/logo.png";

export default function Header() {
    return (
        <header className={Css.header}>
            <div className={Css.container}>
                <div className={Css.logoContainer}>
                    <Logo imageSrc={logo} alt="logo" />
                    <p className={Css.logoLabel}>eatly</p>
                </div>
                <Menu
                    links={[
                        { label: "Recipes", href: "#" },
                        { label: "FAQ", href: "#" },
                        { label: "Blog", href: "#" },
                    ]}
                />
            </div>
            <Divider />
        </header>
    );
}
