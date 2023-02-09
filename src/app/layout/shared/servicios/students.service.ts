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
    });

  this.getCourses().subscribe(res => {
      this.store.dispatch(dataCourses(
        {courses: res}
      ))
    })
}

  getStudents(): Observable<any> {
    return this.http.get(this.url).pipe( map( (response: any) => response.students ))
  }

  getCourses(): Observable<any> {
    return this.http.get(this.url2).pipe( map( (response: any) => response.courses ))
  }

}
