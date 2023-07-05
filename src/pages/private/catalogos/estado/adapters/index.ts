import { ModelBackendEstado } from "@/zustand"


export const AdapterGetAll = (state: ModelBackendEstado[] ) => {
  return  state.map((fila) => ({
      id: fila.id,
      nombreestado: fila.nombreestado,
      descripcion:fila.descripcion,
      registradopor:fila.registradopor,
      fecharegistro:fila.fecharegistro,
      actualizadopor:fila.actualizadopor,
      ultimafechaactualizacion:fila.ultimafechaactualizacion,
      estado: fila.estado,
    }))
}