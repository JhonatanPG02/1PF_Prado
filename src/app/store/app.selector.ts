import {createSelector} from '@ngrx/store'
import { AppState } from './app.state';


export const selectStudentsFeature = (state: AppState) => state.students;

export const selectListStudents = createSelector(
  selectStudentsFeature,
  (state: any ) => state.students
)
