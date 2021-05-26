import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddComponent } from "./add/add.component";
import { UpdateComponent } from "./update/update.component";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public reload: any = new EventEmitter();
  public removeAll: any = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openPostComponent() {
    let ref = this.dialog.open(AddComponent);
    ref.afterClosed().subscribe(() => {
      this.reload.emit({});
    })
  }
  openUpdateComponent(post: any) {
    let update = this.dialog.open(UpdateComponent, {
      data: post
    })
    update.afterClosed().subscribe(() => {
      this.reload.emit()
    })
  }
  deleteAllPosts() {
    this.removeAll.emit({})
  }

}
