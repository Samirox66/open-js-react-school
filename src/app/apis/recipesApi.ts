import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IRecipes {
    recipes: IRecipe[];
}

interface IRecipe {
    name: string;
    prepTimeMinutes: number;
    rating: number;
    tags: string[];
    image: string;
}

export const recipesApi = createApi({
    reducerPath: "recipesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/recipes" }),
    endpoints: (builder) => ({
        getRecipesByMealType: builder.query<IRecipes, void>({
            query: () => "/meal-type/snack",
        }),
    }),
});

export const { useGetRecipesByMealTypeQuery } = recipesApi;
