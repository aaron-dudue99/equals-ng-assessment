import { CreateDinnerComponent } from './create-dinner/create-dinner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DinnersListComponent } from './dinners-list/dinners-list.component';
import { DinnerDetailComponent } from './dinner-detail/dinner-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: HostDashboardComponent},
  {path: 'create', component: CreateDinnerComponent},
  {path: 'list', component: DinnersListComponent},
  {path: 'detail/:id', component: DinnerDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
