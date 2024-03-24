import { useParams } from "react-router-dom";
import { H3Title } from "../../atoms";
import Css from "./CommentsBlock.module.css";
import { Review } from "../../molecules";
import { useGetCommentsByArticleIdQuery } from "../../app/apis/commentsApi";

export default function CommentsBlock() {
    const { id } = useParams();
    const { isLoading, data: commentsData } =
        useGetCommentsByArticleIdQuery(id);
    const comments = commentsData?.comments?.map((comment, index) => (
        <Review
            key={index}
            username={comment.user.username}
            review={comment.body}
        />
    ));
    return (
        <section className={Css.comments}>
            <div className={Css.title}>
                <H3Title color="dark">Comments</H3Title>
            </div>
            {isLoading && <p>Loading...</p>}
            {comments && (
                <div className={Css.commentsContainer}>{comments}</div>
            )}
        </section>
    );
}
