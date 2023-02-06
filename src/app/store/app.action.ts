import { createAction, props } from "@ngrx/store"

export const dataStudents = createAction(
  '[Data Students] Loaded success',
  props<{students: any}>()
)
