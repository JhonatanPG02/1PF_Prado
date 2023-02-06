import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { dataStudents } from 'src/app/store/app.action';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
private url = 'http://demo3045564.mockable.io/students';
public students$: Observable<any>;
private students = new BehaviorSubject<any>([]);

constructor(
  private http: HttpClient,
  private store: Store,
) {
  this.students$ = this.students.asObservable();
    this.getStudents().subscribe(res => {
      this.students.next(res);
      this.store.dispatch(dataStudents(
        {students: res}
      ))
    });
}

  getStudents(): Observable<any> {
    return this.http.get(this.url).pipe( map( (response: any) => response.students ))
  }

  addStudents(payload: any) {
    let newStudent = this.students.getValue()
    newStudent.push(payload)
    this.students.next(newStudent)
  }

  deleteStudent(data: any) {
    let newData = this.students.getValue().filter((elem: any) => elem.id != data.id)
    this.students.next(newData)
  }

  editStudent(data: any) {
    let newData = this.students.getValue().map((elem: any) => elem.id == data.id ? data : elem)
    this.students.next(newData)
  }
}
