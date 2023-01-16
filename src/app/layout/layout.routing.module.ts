import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './componentes/landing/landing.component';
import { NgModule } from '@angular/core';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { AboutUsComponent } from './componentes/about-us/about-us.component';
import { LaborExchangeComponent } from './componentes/labor-exchange/labor-exchange.component';
import { LoginGuardService } from '../auth/services/login-guard.service';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuardService],
    children: [
      {path: '', component: FormularioComponent},

      {
        path: 'about-us',
      component: AboutUsComponent
      },
      {
        path: 'labor-exchange',
      component: LaborExchangeComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LayoutRoutingModule {};
