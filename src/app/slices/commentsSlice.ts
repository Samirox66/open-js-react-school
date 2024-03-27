import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IComment } from "../apis/commentsApi";
import { RootState } from "../store";

interface IAddNewCommentAction {
    comment: IComment;
    articleId: number;
}

interface INewComments {
    articleId: number;
    comments: IComment[];
}

const commentsSlice = createSlice({
    name: "commentsSlice",
    initialState: new Array<INewComments>(),
    reducers: {
        addNewComment: (state, action: PayloadAction<IAddNewCommentAction>) => {
            const article = state.find(
                (article) => article.articleId == action.payload.articleId
            );
            if (article) {
                article.comments.push(action.payload.comment);
                return;
            }
            state.push({
                articleId: action.payload.articleId,
                comments: [action.payload.comment],
            });
        },
    },
});

export const { addNewComment } = commentsSlice.actions;
export const selectComments = (state: RootState) => state.commentsReducer;
export default commentsSlice.reducer;
