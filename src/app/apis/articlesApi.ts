import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArticlePreviewProps } from "../../molecules";

interface IArticlesPreviewResponse {
    posts: ArticlePreviewProps[];
    total: number;
    skip: number;
    limit: number;
}

export const articlesApi = createApi({
    reducerPath: "articlesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/posts" }),
    endpoints: (builder) => ({
        getArticles: builder.query<IArticlesPreviewResponse, number>({
            query: (start) =>
                `?limit=12&skip=${start}&select=title,body,text,reactions,id,tags,userId`,
        }),
        getArticleById: builder.query<ArticlePreviewProps, string | undefined>({
            query: (id) => `/${id}`,
        }),
    }),
});

export const { useGetArticlesQuery, useGetArticleByIdQuery } = articlesApi;
