import { Alumnos } from '../layout/shared/models/alumnos.model';
import { addStudent, dataStudents, deleteStudent } from './app.action';
import {createReducer, on} from '@ngrx/store'

export const initialState: {
  students: any,
  error: any
} = {students: [],
    error: null}

export const studentsReducer = createReducer(
  initialState,
  on(dataStudents, (state, {students}) => {
    return {...state, students}
  }),
  on(addStudent, (state, {alumno}) => {
    return {...state, students: [...state.students, alumno]}
  }),
  on(deleteStudent, (state, {alumno}) => {
    return {...state, students: state.students.filter((value: Alumnos) => value != alumno)}
  })
)
