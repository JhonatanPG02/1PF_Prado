import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLogged } from 'src/app/store/app.selector';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  constructor(

  ) { }

  ngOnInit() {
  }


}
