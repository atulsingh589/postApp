import { Component, OnInit } from '@angular/core';
import { Login } from "./login";
import { LoginService } from "./login.service";
import { NotificationService } from "../shared/notification.service";
import { LoginModel } from "./login.model";
import { storageService } from "../shared/storage.service"
import { Router } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    ngOnInit(): void {
        //throw new Error('Method not implemented.');
    }
    public user: Login = { username: "", password: "" }
    public progress: Boolean = false;
    constructor(private route: Router, private login: LoginService, private storage: storageService, private loginModel: LoginModel, private notify: NotificationService) { }
    onSubmit() {
        this.progress = !this.progress;
        let validate = this.loginModel.validate(this.user);
        if (validate.length > 0) {
            this.notify.error(validate[0].message);
        }
        else {
            this.login.auth(this.user).subscribe((resp: any) => {
                console.log(this.user)
                if (resp.status) {
                    this.storage.setSession(resp.data);
                    this.route.navigateByUrl("/post")
                    this.notify.success(resp.message);
                }
                else {
                    this.notify.error(resp.error);
                }
                this.progress = !this.progress;
            })
        }
    }

}