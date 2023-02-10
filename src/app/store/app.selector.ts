import {createSelector} from '@ngrx/store'
import { AppState } from './app.state';



export const selectStudentsFeature = (state: AppState) => state.students;

export const selectListStudents = createSelector(
  selectStudentsFeature,
  (state: any ) => state.students
)

export const selectListCourses = createSelector(
  selectStudentsFeature,
  (state: any) => state.courses
)

export const selectLoading = createSelector(
  selectStudentsFeature,
  (state: any) => state.loading
)
