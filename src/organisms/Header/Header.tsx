import { Divider, Logo } from "../../atoms";
import { Menu } from "../../molecules";

import Css from "./Header.module.css";
import logo from "../../resources/imgs/logo.png";

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
                        {
                            label: "Recipes",
                            href: "/open-js-react-school/#recipes",
                        },
                        { label: "FAQ", href: "/open-js-react-school/#faq" },
                        { label: "Blog", href: "/open-js-react-school/blog" },
                    ]}
                />
            </div>
            <Divider />
        </header>
    );
}
