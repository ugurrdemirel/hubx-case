// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ICategory, IQuestion} from './serviceTypes';

// Define a service using a base URL and expected endpoints
export const hubxApi = createApi({
  reducerPath: 'hubxApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummy-api-jtg6bessta-ey.a.run.app/',
  }),
  endpoints: builder => ({
    getQuestions: builder.query<Array<IQuestion>, void>({
      query: () => 'getQuestions',
    }),
    getCategories: builder.query<{data: Array<ICategory>}, void>({
      query: () => 'getCategories',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetQuestionsQuery, useGetCategoriesQuery} = hubxApi;
