import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Variable } from "../environment";
import { ModelBackendEstado } from "@/pages/private/catalogos/estado/models";
import { ModelFormEstado } from "@/redux/models";

const { baseURL, Limite } = Variable;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  tagTypes: ["getAllState"],
  endpoints: (builder) => ({
    getAllState: builder.query<ModelBackendEstado[], void>({
      query: () => `/getAll/${Limite}`,
      providesTags: ["getAllState"],
    }),
    createEstado: builder.mutation({
      query: (data: ModelFormEstado) => ({
        url: "/crearEstado",
        method: "POST",
        body: {
          nombreEstado: data.Estado,
          descripcion: data.Descripcion,
          registradoPor: "1",
        },
      }),
      invalidatesTags: ["getAllState"],
      
    }),
  }),
});

export const { useGetAllStateQuery, useCreateEstadoMutation } = apiSlice;
