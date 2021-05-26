import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: SharedService) { }
  auth(data: Login) {
    return this.api.call("login", data);
  }
}
