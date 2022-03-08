import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6209629f6df46f0017f4c4dd.mockapi.io/api/docs/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    deleteContacts: builder.mutation({
      query: contactsId => ({
        url: `/contacts/${contactsId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    createContacts: builder.mutation({
      query: newContacts => ({
        url: `/contacts`,
        method: 'POST',
        body: newContacts,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
} = contactsApi;
