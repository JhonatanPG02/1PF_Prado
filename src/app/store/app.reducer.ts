import { Alumnos } from '../layout/shared/models/alumnos.model';
import { addStudent, dataCourses, dataStudents, deleteStudent, editStudent } from './app.action';
import {createReducer, on} from '@ngrx/store'

export const initialState: {
  students: any,
  courses: any,
} = {students: [],
    courses: []
  }

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
  }),
  on(editStudent, (state, {alumno}) => {
    return {...state, students: state.students.map((value: Alumnos) => value.id == alumno.id ? alumno : value)}
  }),
  on(dataCourses, (state, {courses}) => {
    return {...state, courses}
  }),
)
