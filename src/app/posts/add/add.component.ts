import { Component, OnInit } from '@angular/core';
import { PostService } from "./add.service";
import { NotificationService } from "../../shared/notification.service";
import { Post, media } from "./add";
import { PostModel } from "./add.model";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public progress: boolean = false;
  public post: Post = new Post();
  public fileName: String = "";

  constructor(public dialogRef: MatDialogRef<AddComponent>, public service: PostService, private notify: NotificationService, private postModel: PostModel) { }

  ngOnInit(): void {
  }
  uploadFile(event: any) {
    let file = event.target.files[0];
    console.log(file)
    this.service.upload(file).subscribe((data: any) => {
      if (data.status) {
        this.fileName = file.name;
        this.post.media = { file_id: data.file, file_type: file.type }
      }
      else {
        this.notify.error(data.error)
      }
    })
  }
  onSubmit() {
    this.progress = !this.progress
    let validation = this.postModel.validate(this.post);
    if (validation.length > 0) {
      this.notify.error(validation[0].error)
    }
    else {
      this.service.addPost(this.post).subscribe((resp: any) => {
        if (resp.status) {
          this.notify.success(resp.message);
          this.progress = !this.progress
          this.dialogRef.close()
        } else {
          this.notify.error(resp.error);
          this.progress = !this.progress
        }

      })
    }
  }

}
