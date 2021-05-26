import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDatepickerModule } from "@angular/material/datepicker"
import { FormsModule } from "@angular/forms";
import { PostModel } from "./add.model";
import { PostService } from "./add.service";
import { MatNativeDateModule } from '@angular/material/core'
@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [AddComponent],
  providers: [PostModel, PostService]
})
export class AddModule { }
