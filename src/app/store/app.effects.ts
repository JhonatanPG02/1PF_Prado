
import { Injectable } from "@angular/core";
import { EMPTY} from 'rxjs';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StudentsService } from '../layout/shared/servicios/students.service';
import {catchError, concatMap, map } from 'rxjs/operators'
import * as AppActions from '../store/app.action'

@Injectable()
export class AppEfeccts {

  loadStudents$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(AppActions.loadStudents),
    concatMap(() => this.studentService.getStudents()
      .pipe(
        map(students => AppActions.dataStudents({students})),
        catchError(()=> EMPTY)
      ))
  )})

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.loadCourses),
      concatMap(() => this.studentService.getCourses()
        .pipe(
          map(courses => AppActions.dataCourses({courses})),
          catchError(()=> EMPTY)
        ))
    )})

  constructor(
    private actions$: Actions,
    private studentService :StudentsService
  ) {

  }
}
