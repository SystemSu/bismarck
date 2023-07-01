import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AddDispatch, RootState } from "./store";

export const  useAppDispatch:()=>AddDispatch= useDispatch;
export const  useAppSelector: TypedUseSelectorHook<RootState> = useSelector;