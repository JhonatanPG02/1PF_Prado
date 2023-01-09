import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

constructor(
  private http: HttpClient
) { }

  getStudents(): Observable<any> {
    return this.http.get('assets/data/data.json').pipe( map( (response: any) => response.students ))
  }
}
