import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement() {
    let location = useLocation();

    useEffect(() => {
        let hash = location.hash;
        const removeHashCharacter = (str: string) => {
            const result = str.slice(1);
            return result;
        };

        if (!hash) {
            return;
        }

        let element = document.getElementById(removeHashCharacter(hash));

        element?.scrollIntoView({
            behavior: "smooth",
            inline: "nearest",
        });
    }, [location]);

    return null;
}
