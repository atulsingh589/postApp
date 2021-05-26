import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { AddModule } from './add/add.module';
import { UpdateModule } from './update/update.module';
import { ListModule } from './list/list.module';


@NgModule({
  declarations: [
    PostsComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    AddModule,
    UpdateModule,
    ListModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PostsModule { }
