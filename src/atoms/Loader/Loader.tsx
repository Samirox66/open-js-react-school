import { useEffect, useState } from "react";

import Css from "./Loader.module.css";

interface LoaderProps {
    isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
    const [intervalId, setIntervalId] = useState<number>();
    const [dots, setDots] = useState(3);

    useEffect(() => {
        if (isLoading) {
            const id = setInterval(
                () => setDots((prev) => (prev % 3) + 1),
                500
            );
            setIntervalId(id);
        }

        return () => {
            clearInterval(intervalId);
            setIntervalId(undefined);
        };
    }, [isLoading]);

    if (!isLoading) return;

    return (
        <p className={Css.loader}>Loading{Array(dots).fill(".").join("")}</p>
    );
}
