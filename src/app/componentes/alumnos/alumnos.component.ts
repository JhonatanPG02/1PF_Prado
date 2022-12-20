import { Component, Input, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/shared/models/alumnos.model';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  @Input() students: Array<any>

  displayedColumns = ['documentNumber', 'name', 'course', 'turn', 'email', 'delete']

  constructor() { }

  ngOnInit(): void {
  }

  eliminarAlumno(alumno: Alumnos): void {
    this.students = this.students.filter( student => student.documentNumber != alumno.documentNumber)
  }

}
