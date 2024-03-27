import { useNavigate, useParams } from "react-router-dom";
import Css from "./Article.module.css";
import { useGetArticleByIdQuery } from "../../app/apis/articlesApi";
import {
    Button,
    H3Title,
    Loader,
    Paragraph,
    Rating,
    Tags,
    User,
} from "../../atoms";

import arrow from "./imgs/arrowRight.png";

export default function Article() {
    const { id, userId } = useParams();
    const { isLoading: isArticleLoading, data: article } =
        useGetArticleByIdQuery(id);

    const navigate = useNavigate();

    if (isArticleLoading) return <Loader isLoading={isArticleLoading} />;

    if (!article) return <p>No data</p>;

    return (
        <section className={Css.article}>
            <div className={Css.header}>
                <H3Title color="dark">{article.title}</H3Title>
                <div className={Css.userInfo}>
                    <User userId={Number(userId)} />
                    <div className={Css.verticalContainer}>
                        <Rating rating={article.reactions} />
                        <Tags tags={article.tags} />
                    </div>
                </div>
                <Paragraph type="big_gray">{article.body}</Paragraph>
                <div className={Css.toArticlesButton}>
                    <Button type="secondary" onClick={() => navigate(-1)}>
                        <img src={arrow} />
                        All articles
                    </Button>
                </div>
            </div>
        </section>
    );
}
