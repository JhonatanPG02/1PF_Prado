import { createAction, props } from "@ngrx/store"
import { Alumnos } from "../layout/shared/models/alumnos.model"

export const loadStudents = createAction(
  '[Load Students] Load students',
)

export const dataStudents = createAction(
  '[Data Students] Loaded success',
  props<{students: any}>()
)

export const addStudent = createAction(
  '[Add Student] Add student success',
  props<{alumno: Alumnos}>()
)

export const deleteStudent = createAction(
  '[Delete Student] Delete student success',
  props<{alumno: Alumnos}>()
)

export const editStudent = createAction(
  '[Edit Student] Edit student success',
  props<{alumno: Alumnos}>()
)

export const loadCourses = createAction(
  '[Load Courses] Load courses',
)

export const dataCourses = createAction(
  '[Data Courses] Loaded success',
  props<{courses: any}>()
)

