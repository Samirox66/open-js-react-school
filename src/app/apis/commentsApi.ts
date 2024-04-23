import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IComments {
    comments: IComment[];
}

export interface IComment {
    user: {
        username: string;
    };
    body: string;
}

export const commentsApi = createApi({
    reducerPath: "commentsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/comments" }),
    endpoints: (builder) => ({
        getCommentsByArticleId: builder.query<IComments, string | undefined>({
            query: (id) => `/post/${id}`,
        }),
        getComments: builder.query<IComments, void>({
            query: () => "",
        }),
        postComment: builder.mutation<
            IComment,
            { postId: number; userId: number; body: string }
        >({
            query: (comment) => ({
                url: "/add",
                method: "POST",
                body: comment,
            }),
        }),
    }),
});

export const {
    useGetCommentsByArticleIdQuery,
    useGetCommentsQuery,
    usePostCommentMutation,
} = commentsApi;
