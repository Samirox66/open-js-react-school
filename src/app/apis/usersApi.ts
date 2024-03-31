import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IUser {
    firstName: string;
    lastName: string;
    image: string;
}

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/users" }),
    endpoints: (builder) => ({
        getUserById: builder.query<IUser, string | undefined>({
            query: (id) => `/${id}`,
        }),
    }),
});

export const { useGetUserByIdQuery } = usersApi;
