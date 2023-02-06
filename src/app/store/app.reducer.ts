import { dataStudents } from './app.action';
import {createReducer, on} from '@ngrx/store'

export const initialState: {
  students: ReadonlyArray<any>
} = {students: []}

export const studentsReducer = createReducer(
  initialState,
  on(dataStudents, (state, {students}) => {
    return {...state, students}
  })
)
