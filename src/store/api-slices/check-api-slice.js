import { protectedApiEndpoint } from "./api-slice"

export const checklistApiSlice = protectedApiEndpoint.injectEndpoints({
  endpoints: (builder) => ({
    getAllCheck: builder.query({
      query: ({ checkListId }) => ({
        url: `checklist/${checkListId}/item`,
        method: "GET",
      }),
      transformResponse: (response) => {
        const checks = response?.data

        return checks
      },
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ type: "CHECK", id })),
              { type: "CHECK", id: "LIST_OF_CHECK" },
            ]
          : [{ type: "CHECK", id: "LIST_OF_CHECK" }]
      },
    }),
    getDetailCheck: builder.mutation({
      query: ({ checkListId, id }) => ({
        url: `checklist/${checkListId}/item/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        const checks = response?.data

        return checks
      },
    }),
    createCheck: builder.mutation({
      query: ({ checkListId, itemName }) => ({
        url: `checklist/${checkListId}/item`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          itemName,
        },
      }),
      transformResponse: (response) => {
        const checklist = response
        return checklist
      },
      invalidatesTags: () => [{ type: "CHECK", id: "LIST_OF_CHECK" }],
    }),
    deleteCheck: builder.mutation({
      query: ({ checkListId, id }) => ({
        url: `checklist/${checkListId}/item/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      transformResponse: (response) => {
        const checklist = response
        return checklist
      },
      invalidatesTags: (result, error, { id }) => [
        { type: "CHECK", id },
        { type: "CHECK", id: "LIST_OF_CHECK" },
      ],
    }),
    changeStatusCheck: builder.mutation({
      query: ({ checkListId, id }) => ({
        url: `checklist/${checkListId}/item/${id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      transformResponse: (response) => {
        const checklist = response
        return checklist
      },
      invalidatesTags: (result, error, { id }) => [
        { type: "CHECK", id },
        { type: "CHECK", id: "LIST_OF_CHECK" },
      ],
    }),
    renameCheck: builder.mutation({
      query: ({ checkListId, id, itemName }) => ({
        url: `checklist/${checkListId}/item/rename/${id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          itemName,
        },
      }),
      transformResponse: (response) => {
        const checklist = response
        return checklist
      },
      invalidatesTags: (result, error, { id }) => [
        { type: "CHECK", id },
        { type: "CHECK", id: "LIST_OF_CHECK" },
      ],
    }),
  }),
})

export const {
  useChangeStatusCheckMutation,
  useCreateCheckMutation,
  useGetAllCheckQuery,
  useRenameCheckMutation,
  useDeleteCheckMutation,
  useGetDetailCheckMutation,
} = checklistApiSlice
