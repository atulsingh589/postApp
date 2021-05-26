import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  call = (api: String, data: Object) => {
    let api_url = environment.api_url + api;
    return this.http.post(api_url, data);
  }
  upload = (api: string, data: any) => {
    let api_url = environment.api_url + api;
    let fd = new FormData();
    fd.append("media", data);
    return this.http.post(api_url, fd, { headers: {} });

  }
}
