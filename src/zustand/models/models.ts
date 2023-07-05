

export type ModelEstado ={
    Estado:string,
    Descripcion:string
}

export type ModelBackendEstado = {
    id: string,
    nombreestado: string,
    descripcion:string
    registradopor:string,
    fecharegistro:string,
    actualizadopor:string,
    ultimafechaactualizacion:string,
    estado: string
  };
  
  
  

export type ModelStore ={
    estado:ModelBackendEstado[]
    getAllState:({limite}:{limite:number})=>void
}


export const EstadoIniciarStore:ModelStore={
    estado: [],
    getAllState: function ({ limite }: { limite: number; }): void {
        throw new Error("Function not implemented.");
    }
}