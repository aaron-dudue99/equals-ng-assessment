import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component';
import { GuestDashboardComponent } from './guest-dashboard/guest-dashboard.component';
import { CreateDinnerComponent } from './create-dinner/create-dinner.component';
import { DinnersListComponent } from './dinners-list/dinners-list.component';
import { DinnerDetailComponent } from './dinner-detail/dinner-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
    HostDashboardComponent,
    GuestDashboardComponent,
    CreateDinnerComponent,
    DinnersListComponent,
    DinnerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
