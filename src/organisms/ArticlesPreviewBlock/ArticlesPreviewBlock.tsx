import { useGetArticlesQuery } from "../../app/apis/articlesApi";
import { ColoredText, H3Title, Loader } from "../../atoms";
import Css from "./ArticlesPreviewBlock.module.css";
import { ArticlePreview, PaginationButtons } from "../../molecules";
import { useSearchParams } from "react-router-dom";

const INDEX_KEY = "start-index-of-articles";

export default function ArticlesPreviewBlock() {
    const [searchParams, setSearchParams] = useSearchParams();
    let startIndexOfArticles = Number(searchParams.get(INDEX_KEY));

    const { isLoading, data: articlesData } =
        useGetArticlesQuery(startIndexOfArticles);

    const articles = articlesData?.posts.map((article) => (
        <ArticlePreview
            key={article.id}
            tags={article.tags}
            title={article.title}
            body={article.body}
            reactions={article.reactions}
            id={article.id}
            userId={article.userId}
        />
    ));
    return (
        <section className={Css.block}>
            <H3Title color="dark">
                Latest <ColoredText color="#6C5FBC">Articles</ColoredText>
            </H3Title>
            <section className={Css.articles}>
                <Loader isLoading={isLoading} />
                {articles}
            </section>
            <PaginationButtons
                onLeftButtonClick={() =>
                    setSearchParams((prevSearchParams) => {
                        prevSearchParams.set(
                            INDEX_KEY,
                            String(startIndexOfArticles - 12)
                        );
                        return prevSearchParams;
                    })
                }
                onRightButtonClick={() =>
                    setSearchParams((prevSearchParams) => {
                        prevSearchParams.set(
                            INDEX_KEY,
                            String(startIndexOfArticles + 12)
                        );
                        return prevSearchParams;
                    })
                }
                isLeftDisabled={!articlesData || startIndexOfArticles == 0}
                isRightDisabled={
                    !articlesData ||
                    startIndexOfArticles + 12 >= articlesData.total
                }
            />
        </section>
    );
}
