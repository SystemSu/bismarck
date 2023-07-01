import { apiSlice } from "@/shared/ApiRTKQuery";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {

    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
