import { getLocalStorageData } from "@/lib/local-storage"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const AuthType = {
  AUTH_LOCALSTORAGE_KEY: "accessToken",
}

// Utility function to prepare headers
const prepareAuthHeaders = (headers) => {
  const token = getLocalStorageData(AuthType.AUTH_LOCALSTORAGE_KEY)
  console.log("curent token: ", token)
  if (token) {
    headers.set("Authorization", `Bearer ${token}`)
  }
  return headers
}

// public endpoint
export const apiEndpoint = createApi({
  reducerPath: "PUBLIC_ENDPOINT",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env?.VITE_BASE_URL,
  }),
  endpoints: () => ({}),
})

// protected endpoint with JWT
export const protectedApiEndpoint = createApi({
  reducerPath: "PROTECTED_ENDPOINT",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env?.VITE_BASE_URL,
    prepareHeaders: prepareAuthHeaders,
    tagTypes: ["CHECKLIST", "CHECK", "USER"],
  }),
  endpoints: () => ({}),
})
