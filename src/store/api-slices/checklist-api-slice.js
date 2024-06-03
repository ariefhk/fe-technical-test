import { protectedApiEndpoint } from "./api-slice"

export const checklistApiSlice = protectedApiEndpoint.injectEndpoints({
  endpoints: (builder) => ({
    getAllCheckList: builder.query({
      query: () => ({
        url: "checklist",
        method: "GET",
      }),
      transformResponse: (response) => {
        const checklist = response?.data

        return checklist
      },
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ type: "CHECKLIST", id })),
              { type: "CHECKLIST", id: "LIST_OF_CHECKLIST" },
            ]
          : [{ type: "CHECKLIST", id: "LIST_OF_CHECKLIST" }]
      },
    }),
    createCheckList: builder.mutation({
      query: ({ name }) => ({
        url: "checklist",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          name,
        },
      }),
      transformResponse: (response) => {
        const checklist = response?.data
        return checklist
      },
      invalidatesTags: () => [{ type: "CHECKLIST", id: "LIST_OF_CHECKLIST" }],
    }),
    deleteCheckList: builder.mutation({
      query: ({ id }) => ({
        url: `checklist/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      transformResponse: (response) => {
        const checklist = response?.data?.message
        return checklist
      },
      invalidatesTags: (result, error, { id }) => [
        { type: "CHECKLIST", id },
        { type: "CHECKLIST", id: "LIST_OF_CHECKLIST" },
      ],
    }),
  }),
})

export const {
  useCreateCheckListMutation,
  useGetAllCheckListQuery,
  useDeleteCheckListMutation,
} = checklistApiSlice
