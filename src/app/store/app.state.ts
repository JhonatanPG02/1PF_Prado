import { ActionReducerMap } from "@ngrx/store";
import { studentsReducer } from "./app.reducer";

export interface AppState {
  students: any
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  students: studentsReducer
}
s
