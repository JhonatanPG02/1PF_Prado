import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleDirective } from './shared/directivas/title.directive';
import { AlumnoPipe } from './shared/pipes/alumno.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    AlumnosComponent,
    FormularioComponent,
    TitleDirective,
    AlumnoPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
