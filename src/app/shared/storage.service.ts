import { Inject, Injectable } from '@angular/core';
import { StorageService, SESSION_STORAGE } from 'ngx-webstorage-service';
@Injectable({
  providedIn: 'root'
})
export class storageService {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }
  setSession(data: any) {
    this.storage.set("user", data)
  }
  removeSession() {
    this.storage.clear()
  }
  getSession() {
    this.storage.get("user");
  }
}
