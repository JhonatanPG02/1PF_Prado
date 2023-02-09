import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public logged: string = '';
  constructor(
    private readonly router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.logged = this.authService.isLogged()
  }

  nextPage(): void {
    this.router.navigate(['/home/dashboard'])
  }

  login(){
    this.router.navigate(['/auth/login'])
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }

}
