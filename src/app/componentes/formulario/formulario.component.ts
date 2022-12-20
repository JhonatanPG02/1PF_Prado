import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from '../../shared/models/alumnos.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public formAlumnos: FormGroup
  public students: Alumnos[] = [
    {
      documentNumber: '54675787',
      name:'Juan',
      lastname:'Lopez Alvarez',
      course:'Angular',
      turn:'Tarde',
      email:'juan.lopez@gmail.com'
    },
    {
      documentNumber: '46758733',
      name:'Rosa',
      lastname:'García Cruz',
      course:'React',
      turn:'Mañana',
      email:'rosa2022@gmail.com'
    },
    {
      documentNumber: '35746438',
      name:'Jorge',
      lastname:'Rufino Rodriguez',
      course:'Javascript',
      turn:'Noche',
      email:'jorge.rufino@gmail.com'
    },
    ]

  @ViewChild('agregarAlumno', {static: true, read: TemplateRef})
  agregarAlumno: TemplateRef<ElementRef>

  constructor(
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
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

  openModal() {
    this.viewContainerRef.createEmbeddedView(this.agregarAlumno)
  }

  hideModal() {
    this.viewContainerRef.clear()
    this.formAlumnos.reset()
  }

  onSubmit() {
    this.students = [...this.students, this.formAlumnos.value]
    this.viewContainerRef.clear()
    this.formAlumnos.reset()
  }

}
