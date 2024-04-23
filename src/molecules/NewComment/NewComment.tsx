import { useEffect, useState } from "react";
import Css from "./NewComment.module.css";
import { Button, ColoredText, H3Title, TextArea } from "../../atoms";
import { usePostCommentMutation } from "../../app/apis/commentsApi";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addNewComment } from "../../app/slices/commentsSlice";

export default function NewComment() {
    const [newComment, setNewComment] = useState("");
    const [triggerAddComment, { isLoading, data }] = usePostCommentMutation();
    const { id, userId } = useParams();
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        if (!data) {
            return;
        }
        setNewComment("");
        dispatch(addNewComment({ articleId: Number(id), comment: data }));
    }, [data]);

    const addComment = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (!userId || !id) {
            navigate("/blog");
            return;
        }

        if (!newComment) {
            return;
        }

        triggerAddComment({
            body: newComment,
            userId: Number(userId),
            postId: Number(id),
        });
    };

    return (
        <section className={Css.newComment}>
            <H3Title color="dark">
                Add <ColoredText color="#6C5FBC">comment</ColoredText>
            </H3Title>
            <form onSubmit={addComment} className={Css.form}>
                <TextArea
                    value={newComment}
                    onInput={(value) => setNewComment(value)}
                    placeholder="ENTER YOUR COMMENT"
                />
                <Button type="primary" style={{ maxWidth: "367px" }}>
                    {isLoading ? "Sending" : "Send"}
                </Button>
            </form>
        </section>
    );
}
