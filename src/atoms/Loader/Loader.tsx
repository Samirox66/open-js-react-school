import Css from "./Loader.module.css";

interface LoaderProps {
    isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
    if (!isLoading) return;

    return <p className={Css.loader}>Loading...</p>;
}
