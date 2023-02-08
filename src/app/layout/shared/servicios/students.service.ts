import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { dataCourses, dataStudents } from 'src/app/store/app.action';



@Injectable({
  providedIn: 'root'
})
export class StudentsService {
private url = 'http://demo3045564.mockable.io/students';
private url2 = 'http://demo3045564.mockable.io/courses';
public students$: Observable<any>;


constructor(
  private http: HttpClient,
  private store: Store,
) {

  this.getStudents().subscribe(res => {
      this.store.dispatch(dataStudents(
        {students: res}
      ))
      console.log(this.store)
    });

    this.getCourses().subscribe(res => {
      this.store.dispatch(dataCourses(
        {courses: res}
      ))
      console.log(this.store)
    })
}

  getStudents(): Observable<any> {
    return this.http.get(this.url).pipe( map( (response: any) => response.students ))
  }

  getCourses(): Observable<any> {
    return this.http.get(this.url2).pipe( map( (response: any) => response.courses ))
  }

  // addStudents(payload: any) {
  //   this.store.dispatch(addStudent({alumno: payload}))
  // }

  // deleteStudent(data: Alumnos) {
  //   this.store.dispatch(deleteStudent({alumno: data}))
  // }

  // editStudent(data: Alumnos) {
  //   this.store.dispatch(editStudent({alumno: data}))
  // }
}
