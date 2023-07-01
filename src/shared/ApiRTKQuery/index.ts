import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Variable } from "../environment";
import { ModelBackendEstado } from "@/pages/private/catalogos/estado/models";

const { baseURL, Limite } = Variable;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (builder) => ({
    getAllState: builder.query<ModelBackendEstado[],void>({query: () => `/getAll/${Limite}`}),})});

export const { useGetAllStateQuery } = apiSlice;
