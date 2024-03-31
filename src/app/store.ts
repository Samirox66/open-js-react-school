import { configureStore } from "@reduxjs/toolkit";
import { articlesApi } from "./apis/articlesApi";
import { usersApi } from "./apis/usersApi";
import { commentsApi } from "./apis/commentsApi";
import { recipesApi } from "./apis/recipesApi";

export const store = configureStore({
    reducer: {
        [articlesApi.reducerPath]: articlesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [recipesApi.reducerPath]: recipesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            articlesApi.middleware,
            usersApi.middleware,
            commentsApi.middleware,
            recipesApi.middleware
        ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
