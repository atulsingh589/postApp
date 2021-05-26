import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from "./login.service";
import { LoginModel } from "./login.model";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    LoginRoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [LoginModel, LoginService]
})
export class LoginModule { }
