import { Injectable } from '@angular/core';
import { SharedService } from "../shared/shared.service";
import { Register } from "./register";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private api: SharedService) { }
  submit = (data: Register) => {
    return this.api.call("register", data)
  }
}
