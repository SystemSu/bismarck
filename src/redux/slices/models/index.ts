import { RootState } from "@/redux/store";
import { Action, ThunkAction } from "@reduxjs/toolkit";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type ModelEstado = {
  id: string;
  Estado: string;
  Descripcion: string;
};
export type ModelEstadoReducer = {
  isLoading: boolean;
  lista:ModelEstado[]
};

export const initialState: ModelEstadoReducer= {
  isLoading:false,
  lista:[{
    id:'',
    Estado:'',
    Descripcion:''
  }]
}
