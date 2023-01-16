import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
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

  login(): void {
    const email = this.formLogin.value.email
    const password = this.formLogin.value.password

    this.authService.authLogin(email, password);
  }

}
