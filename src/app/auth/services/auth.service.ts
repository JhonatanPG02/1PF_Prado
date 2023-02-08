import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = ''

constructor(
  private router: Router,
  private auth: AngularFireAuth,
  private cookiesService: CookieService
) { }

authLogin(email: string, password: string) {
  this.auth.signInWithEmailAndPassword(email, password).then(
    (response) => firebase.auth().currentUser?.getIdToken().then(
      (token)=> {
        this.token = token;
        this.cookiesService.set("token", this.token);
        this.router.navigate(['/home'])
      }
    )
  )
}

authRegiter(email: string, password: string) {
  this.auth.createUserWithEmailAndPassword(email, password).then(
    (user) => {
      console.log(user)
      this.router.navigate(['/auth/login'])
    }
  )
}

getIdToken() {
  return this.cookiesService.get("token")
}

isLogged() {
   return this.cookiesService.get("token")
}

logout() {
  firebase.auth().signOut().then(()=> {
    this.token = "";
    this.cookiesService.set("token", this.token);
    this.router.navigate(['/home']);
  });
}

}
