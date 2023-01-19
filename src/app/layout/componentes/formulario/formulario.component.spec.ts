import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

fdescribe(`TEST del componente: 'FormularioComponent'`, () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [ FormularioComponent ]
    })
    .compileComponents();

    //Declaración general
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe existir el FormularioComponent', () => {
    expect(component).toBeTruthy();
  });

  //Completando solo 4 campos de los 6 existentes:
  it('Debe retornar inválido si el form esta incompleto', () => {
    const documentNumber = component.formAlumnos.controls['documentNumber'];
    documentNumber.setValue('45489956');
    const name = component.formAlumnos.controls['name'];
    name.setValue('Juan');
    const lastname = component.formAlumnos.controls['lastname'];
    lastname.setValue('Suarez Roque');
    const email= component.formAlumnos.controls['email']
    email.setValue('juan.suarez@gmail.com')
    expect(component.formAlumnos.invalid).toBeTrue();
  })

  //Completando todos los campos.
  it('Debe retornar válido si el form está completo', () => {
    const documentNumber = component.formAlumnos.controls['documentNumber'];
    documentNumber.setValue('45489956');
    const name = component.formAlumnos.controls['name'];
    name.setValue('Juan');
    const lastname = component.formAlumnos.controls['lastname'];
    lastname.setValue('Suarez Roque');
    const course = component.formAlumnos.controls['course'];
    course.setValue('Angular');
    const turn = component.formAlumnos.controls['turn'];
    turn.setValue('Angular');
    const email= component.formAlumnos.controls['email']
    email.setValue('juan.suarez@gmail.com')
    expect(component.formAlumnos.invalid).toBeFalse();
  })

});
