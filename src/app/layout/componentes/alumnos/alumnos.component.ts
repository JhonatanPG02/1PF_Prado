import { Component, Input, OnInit } from '@angular/core';
import { Alumnos } from '../../shared/models/alumnos.model';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  @Input() students: Array<any>

  displayedColumns = ['documentNumber', 'name', 'course', 'turn', 'email', 'delete', 'edit']

  constructor() { }

  ngOnInit(): void {
  }

  eliminarAlumno(alumno: Alumnos): void {
    this.students = this.students.filter( student => student.documentNumber != alumno.documentNumber)
  }

  editarAlumno(alumno: Alumnos): void {
    console.log('hola')
  }

}
