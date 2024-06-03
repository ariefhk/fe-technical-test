import { apiEndpoint } from "./api-slice"

export const authApiSlice = apiEndpoint.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: `login`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          username,
          password,
        },
      }),
      transformResponse: (response) => {
        const token = response?.data?.token
        return token
      },
    }),
    register: builder.mutation({
      query: ({ email, username, password }) => ({
        url: `register`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          email,
          username,
          password,
        },
      }),
      transformResponse: (response) => {
        return response
      },
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApiSlice
