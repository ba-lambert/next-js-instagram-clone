import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
  tagTypes: ['Users'], // Add tags for cache invalidation
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => '/pokemon/ditto',
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;