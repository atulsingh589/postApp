import { Injectable } from '@angular/core';
import { List } from './list';
import { SharedService } from "../../shared/shared.service";
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private shared: SharedService) { }
  getAllPosts() {
    return this.shared.call("post/read", {})
  }


  removePost(data: Object) {
    return this.shared.call("post/remove", data)
  }
  removeAll(data: Object) {
    return this.shared.call("post/remove/all", data)
  }
}
