import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./layout/layout.module').then((module) => module.LayoutModule),
    data: {
      nombre: 'home'
    }
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule),
    data: {
      nombre: 'auth'
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {};
