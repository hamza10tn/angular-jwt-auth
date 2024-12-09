import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthentificationGuardService } from './services/authentification.guard.service';
import { LoginComponentComponent } from './components/login-component/login-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponentComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthentificationGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
