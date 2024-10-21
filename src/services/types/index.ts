import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TServicesAction } from "../actions/services-action";
import { store } from "../root-reducer";

export type TApplicationActions = TServicesAction


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;