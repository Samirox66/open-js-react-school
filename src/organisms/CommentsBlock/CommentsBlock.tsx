import { useParams } from "react-router-dom";
import { H3Title, Loader } from "../../atoms";
import Css from "./CommentsBlock.module.css";
import { NewComment, Review } from "../../molecules";
import {
    IComment,
    useGetCommentsByArticleIdQuery,
} from "../../app/apis/commentsApi";
import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectComments } from "../../app/slices/commentsSlice";

export default function CommentsBlock() {
    const { id } = useParams();
    const { isLoading, data: commentsData } =
        useGetCommentsByArticleIdQuery(id);

    const postedCommentsData = useAppSelector(selectComments);

    // using store for new comments because of a "silly" backend
    const comments = commentsData?.comments?.map((comment, index) => (
        <Review
            key={index}
            username={comment.user.username}
            review={comment.body}
        />
    ));
    const postedComments = postedCommentsData
        .find((comment) => comment.articleId == Number(id))
        ?.comments.map((comment, index) => (
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
            <Loader isLoading={isLoading} />
            {comments && (
                <div className={Css.commentsContainer}>
                    {comments}
                    {postedComments}
                </div>
            )}
            <NewComment />
        </section>
    );
}
