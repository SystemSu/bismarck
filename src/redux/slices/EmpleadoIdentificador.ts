import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, ModelEstadoReducer, } from "./models";


export const EmpleadoIdentificadorSlice = createSlice({
  name: "Estado",
  initialState,
  reducers: {

    starLoading:(state)=>{

      state.isLoading= true;

    },

    setEstado: (state, action: PayloadAction<ModelEstadoReducer>) => {
  const [{id,Estado,Descripcion}] =action.payload.lista
      state.lista.push({id,Estado,Descripcion})
    },
  },


  
});


export const { setEstado } = EmpleadoIdentificadorSlice.actions;
