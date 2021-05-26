import { AfterViewInit, Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { ListService } from "./list.service";
import { NotificationService } from "../../shared/notification.service";
import { List } from "./list";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateComponent } from "../update/update.component"
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {
  @Input() reload: any;
  @Input() remove: any;
  public list: List[] = [new List()];
  public progress: Boolean = false;
  public dataSource = new MatTableDataSource<List>(this.list);
  public ids: string[] = [];
  constructor(public dialog: MatDialog, private listApi: ListService, private notification: NotificationService) { }
  getPosts() {
    this.progress = true;
    this.listApi.getAllPosts().subscribe((data: any) => {
      if (data.status) {
        this.list = data.message;
        this.dataSource = new MatTableDataSource<List>(this.list);
        this.dataSource.paginator = this.paginator;
      }
      else {
        this.notification.error(data.error)
      }
      this.progress = false;
    })
  }
  openUpdateComponent(post: any) {
    let update = this.dialog.open(UpdateComponent, {
      data: post
    })
    update.afterClosed().subscribe(() => {
      this.getPosts();
    })
  }
  ngOnInit(): void {
    this.getPosts();
    this.reload.subscribe(() => {
      this.getPosts();
    })
    this.remove.subscribe(() => {
      this.deleteAllPost()
    })
  }
  setIds(id: string) {
    console.log(id)
    let isPresent = this.ids.indexOf(id);

    if (isPresent === -1) {
      this.ids.push(id)
    }
    else {
      this.ids.splice(isPresent, 1)
    }
    console.log(this.ids)
  }
  deleteAllPost() {
    let removeIds = { ids: this.ids }
    this.listApi.removeAll(removeIds).subscribe((resp: any) => {
      if (resp.status) {
        this.notification.success(resp.message);
        this.getPosts()
      }
      else {
        this.notification.error(resp.error);
      }
    })
  }
  deletePost(id: string) {
    let removeId = { _id: id }
    this.listApi.removePost(removeId).subscribe((resp: any) => {
      if (resp.status) {
        this.notification.success(resp.message);
        this.getPosts();
      }
      else {
        this.notification.error(resp.error);
      }
    })
  }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
}
