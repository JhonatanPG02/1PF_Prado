
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectListCourses } from 'src/app/store/app.selector';
import { AppState } from 'src/app/store/app.state';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses: Array<any> = [];

  constructor(
    private store: Store<AppState>,
  ) {

  }

  ngOnInit() {
    this.store.select(selectListCourses).subscribe((response) => {
      this.courses = response
    })

  }

}
