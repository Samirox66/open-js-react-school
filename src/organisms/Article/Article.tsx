import { useNavigate, useParams } from "react-router-dom";
import Css from "./Article.module.css";
import { useGetArticleByIdQuery } from "../../app/apis/articlesApi";
import {
    Button,
    Error,
    H3Title,
    Loader,
    Paragraph,
    Rating,
    Tags,
} from "../../atoms";
import { User } from "../../molecules";

import arrow from "./imgs/arrowRight.png";

export default function Article() {
    const { id, userId } = useParams();
    const {
        isLoading: isArticleLoading,
        data: article,
        isError,
    } = useGetArticleByIdQuery(id);

    const navigate = useNavigate();

    if (isArticleLoading) return <Loader isLoading={isArticleLoading} />;

    return (
        <section className={Css.article}>
            <div className={Css.header}>
                <Error isError={isError}>
                    Error loading article, try to reload page
                </Error>
                {article && (
                    <>
                        <H3Title color="dark">{article.title}</H3Title>
                        <div className={Css.userInfo}>
                            <User userId={Number(userId)} />
                            <div className={Css.verticalContainer}>
                                <Rating rating={article.reactions.likes} />
                                <Tags tags={article.tags} />
                            </div>
                        </div>
                        <Paragraph type="big_gray">{article.body}</Paragraph>
                        <div className={Css.toArticlesButton}>
                            <Button
                                type="secondary"
                                onClick={() => navigate(-1)}
                            >
                                <img src={arrow} />
                                All articles
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
