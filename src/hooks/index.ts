import { ModelFormEstao } from "@/pages/private/catalogos/estado/models";
import { Variable } from "@/shared/environment";
import { Api } from "@/shared/services/index";
import { ModelBackendEstado } from "@/zustand";
import { useMutation, useQuery } from "@tanstack/react-query";

async function getAllState() {
  const { data } = await Api.get<ModelBackendEstado[]>(
    `getAll/${Variable.Limite}`
  );
  return data;
}

const createState = async (data_: ModelFormEstao) => {
  const { Estado, Descripcion } = data_;

  
    return await Api.post("crearEstado/", {
      nombreEstado: Estado,
      descripcion: Descripcion,
      registradoPor: 1,
    });
  
};

export function useFetchRepositori() {
  return useQuery(["getAllState"], getAllState);
}

export function useCreateState() {
  return useMutation({
    mutationFn: createState,
  });
}
