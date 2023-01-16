import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component'
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../layout/shared/modulos/material/material.module';
import { RegisterComponent } from './register/register/register.component';
import { AuthRoutingModule } from './auth.routing.module';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    AuthRoutingModule
  ],
  providers: [
  ]
})
export class AuthModule { }
