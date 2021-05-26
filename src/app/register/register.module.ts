import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterService } from "./register.service";
import { RegisterModel } from "./register.model";
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [RegisterModel, RegisterService]
})
export class RegisterModule { }
