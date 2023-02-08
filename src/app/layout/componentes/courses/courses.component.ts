import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectListCourses } from 'src/app/store/app.selector';
import { AppState } from 'src/app/store/app.state';
import { StudentsService } from '../../shared/servicios/students.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses: Observable<any>

  constructor(
    private store: Store<AppState>,
    private studentsService: StudentsService
  ) {
    this.studentsService.getStudents()
  }

  ngOnInit() {
    this.courses = this.store.select(selectListCourses)
  }

}
