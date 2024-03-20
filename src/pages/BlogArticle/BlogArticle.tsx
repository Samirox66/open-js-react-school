import { useParams } from "react-router-dom";

export default function BlogArticle() {
    const { id } = useParams();
    return <>{id}</>;
}
