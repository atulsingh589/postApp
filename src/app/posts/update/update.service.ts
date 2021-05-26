import { Injectable } from '@angular/core';
import { SharedService } from "../../shared/shared.service"
import { Post } from "./update"
@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(public shared: SharedService) { }
  updatePost(data: Post) {
    return this.shared.call("post/update", data)
  }
  upload(file: any) {
    return this.shared.upload("post/upload", file)
  }
}
