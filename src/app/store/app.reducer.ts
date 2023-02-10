import { Alumnos } from '../layout/shared/models/alumnos.model';
import { addStudent, dataCourses, dataStudents, deleteStudent, editStudent, loadCourses, loadStudents } from './app.action';
import {createReducer, on} from '@ngrx/store'

export const initialState: {
  students: any,
  courses: any,
  loading: boolean
} = {students: [],
    courses: [],
    loading: false
  }

export const studentsReducer = createReducer(
  initialState,
  on(loadStudents, (state) => {
    return {...state, loading: true}
  }),
  on(dataStudents, (state, {students}) => {
    return {...state, loading: false, students}
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
  on(loadCourses, (state) => {
    return {...state, loading: true}
  }),
  on(dataCourses, (state, {courses}) => {
    return {...state, loading: false, courses}
  }),
)
