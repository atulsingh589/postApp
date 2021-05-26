import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { UpdateService } from "./update.service";
import { NotificationService } from "../../shared/notification.service";
import { Post, media } from "./update";
import { UpdateModel } from "./update.model";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from "moment";
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public progress: boolean = false;
  //public post: Post = new Post();
  public fileName: String = "";
  public scheduleDate: any;
  public targetDate: any;
  constructor(@Inject(MAT_DIALOG_DATA) public post: Post, public dialogRef: MatDialogRef<UpdateComponent>, public service: UpdateService, private notify: NotificationService, private postModel: UpdateModel) { }

  ngOnInit(): void {
    this.scheduleDate = new Date(this.post.scheduleDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3").toString());
    this.targetDate = new Date(this.post.targetDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3").toString());
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
    this.progress = !this.progress;
    this.post.scheduleDate = moment(this.scheduleDate.toString()).format("DD/MM/YYYY")
    this.post.targetDate = moment(this.targetDate.toString()).format("DD/MM/YYYY")
    let validation = this.postModel.validate(this.post);
    if (validation.length > 0) {
      this.notify.error(validation[0].message)
    }
    else {

      this.service.updatePost(this.post).subscribe((resp: any) => {
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
