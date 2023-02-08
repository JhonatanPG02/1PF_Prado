import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from '../../shared/models/alumnos.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectListStudents } from 'src/app/store/app.selector';
import { AppState } from '../../../store/app.state';
import { addStudent, deleteStudent, editStudent } from 'src/app/store/app.action';
import { StudentsService } from '../../shared/servicios/students.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public formAlumnos: FormGroup
  public formEdit: FormGroup
  public students: Observable<any>
  public title: string = ''

  displayedColumns = ['documentNumber', 'name', 'course', 'turn', 'email', 'delete', 'edit']


  @ViewChild('agregarAlumno', {static: true, read: TemplateRef})
  agregarAlumno: TemplateRef<ElementRef>

  constructor(
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private router: Router,
    private store: Store<AppState>,
    private studenService: StudentsService
  ) {
    this.studenService.getStudents()
  }

  ngOnInit(): void {

    this.students = this.store.select(selectListStudents)

    console.log(this.students)

    this.formAlumnos = this.fb.group({
      documentNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+$/),
          Validators.minLength(8),
          Validators.maxLength(8)
        ]],
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZÁÉÍÓÚáéíóú\s]+$/),
          Validators.minLength(3)
        ]],
      lastname: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZÁÉÍÓÚáéíóú\s]+$/),
          Validators.minLength(3)
        ]],
      course: ['', Validators.required],
      turn: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }



  getErrorDocument() {
    if (this.formAlumnos.controls['documentNumber'].hasError('required')) {
      return 'El documento es requerido';
    } else if (this.formAlumnos.controls['documentNumber'].hasError('pattern')) {
      return 'El documento es inválido'
    } else if (this.formAlumnos.controls['documentNumber'].hasError('minlength') ||
    this.formAlumnos.controls['documentNumber'].hasError('maxlength')) {
      return 'El documento debe tener 8 dígitos'
    } else {
      return ''
    }
  }

  getErrorName() {
    if (this.formAlumnos.controls['name'].hasError('required')) {
      return 'El nombre es requerido';
    } else if (this.formAlumnos.controls['name'].hasError('pattern')) {
      return 'El nombre es inválido'
    } else if (this.formAlumnos.controls['name'].hasError('minlength')) {
      return 'El nombre debe tener al menos 3 caracteres'
    } else {
      return ''
    }
  }

  getErrorLastName() {
    if (this.formAlumnos.controls['lastname'].hasError('required')) {
      return 'El apellido es requerido';
    } else if (this.formAlumnos.controls['lastname'].hasError('pattern')) {
      return 'El apellido es inválido'
    } else if (this.formAlumnos.controls['lastname'].hasError('minlength')) {
      return 'El apellido debe tener al menos 3 caracteres'
    } else {
      return ''
    }
  }

  getErrorCourse() {
    if (this.formAlumnos.controls['course'].hasError('required')) {
      return 'El curso es requerido';
    } else {
      return ''
    }
  }

  getErrorTurn() {
    if (this.formAlumnos.controls['turn'].hasError('required')) {
      return 'El turno es requerido';
    } else {
      return ''
    }
  }

  getErrorEmail() {
    if (this.formAlumnos.controls['email'].hasError('required')) {
      return 'El email es requerido';
    } else if (this.formAlumnos.controls['email'].hasError('email')) {
      return 'El email es inválido'
    } else {
      return ''
    }
  }


  openModal(): void {
    this.title = 'NUEVO ALUMNO'
    this.viewContainerRef.createEmbeddedView(this.agregarAlumno)
  }

  openModalEdit(elem: any): void {
    this.title = 'EDITAR ALUMNO'
    this.formAlumnos.controls['documentNumber'].setValue(elem.documentNumber)
    this.formAlumnos.controls['name'].setValue(elem.name)
    this.formAlumnos.controls['lastname'].setValue(elem.lastname)
    this.formAlumnos.controls['course'].setValue(elem.course)
    this.formAlumnos.controls['turn'].setValue(elem.turn)
    this.formAlumnos.controls['email'].setValue(elem.email)
    console.log(this.formAlumnos.value)

    this.viewContainerRef.createEmbeddedView(this.agregarAlumno)
  }

  hideModal(): void {
    this.viewContainerRef.clear()
    this.formAlumnos.reset()
  }

  addStudent(): void {

    const data = {
      id: +this.formAlumnos.controls['documentNumber'].value,
      ...this.formAlumnos.value
    }

    this.store.dispatch(addStudent({alumno: data}))
    this.viewContainerRef.clear()
    this.formAlumnos.reset()
  }

  deleteStudent(alumno: Alumnos): void {
    this.store.dispatch(deleteStudent({alumno}))
  }

  editStudent(): void {
    const data = {
      id: +this.formAlumnos.controls['documentNumber'].value,
      ...this.formAlumnos.value
    }
    this.store.dispatch(editStudent({alumno: data}))
    this.viewContainerRef.clear()
    this.formAlumnos.reset()
  }

  backToHome(): void {
    this.router.navigate(['/home'])
  }

}
