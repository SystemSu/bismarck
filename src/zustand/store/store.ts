import { create } from "zustand";
import { EstadoIniciarStore, ModelBackendEstado, ModelStore } from "..";
import { AdapterGetAll } from "@/pages/private/catalogos/estado/adapters";
import { Api } from "@/shared/services";

export const useStore = create<ModelStore>()((set) => ({
  estado: EstadoIniciarStore.estado,
  getAllState: async ({ limite }: { limite: number }) => {
    const endPoint = "getAll/";
    const params = `${limite}`;
    const estado = AdapterGetAll(
      (await Api.get<ModelBackendEstado[]>(`${endPoint}${params}`)).data
    );
    set((state) => ({
      ...state,
      estado,
    }));
  },
}));
