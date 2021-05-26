import { Injectable } from '@angular/core';
import { Post } from './add';
import { SharedService } from "../../shared/shared.service";
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private shared: SharedService) { }
  addPost(data: Post) {
    return this.shared.call("post/add", data)
  }
  upload(file: any) {
    return this.shared.upload("post/upload", file)
  }
}
