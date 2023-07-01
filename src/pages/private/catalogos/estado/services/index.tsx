import { Api } from "@/shared/services";
import { AdapterGetAll } from "../adapters";
import { ModelBackendEstado } from "../models";




export const State = {
  getAll: async function ({ limite }: { limite: number }) {
    const endPoint = "getAll/";
    const params = `${limite}`;
    return AdapterGetAll((await Api.get<ModelBackendEstado[]>(`${endPoint}${params}`)).data);
  },


};
