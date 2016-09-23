import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { appRouting } from './app.routing';
import { AuthManager } from './auth/auth.manager';
import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, 
    appRouting
  ],
  providers: [
    AuthManager,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}