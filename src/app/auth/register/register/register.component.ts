import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formRegister: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.formRegister = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]],
      password: [
        '',
        [
          Validators.required,
        ]],
    })
  }

  register(): void {
    const email = this.formRegister.value.email
    const password = this.formRegister.value.password

    this.authService.authRegiter(email, password)
  }

}
