import { Component, OnInit } from '@angular/core';
import { RegisterModel } from "./register.model";
import { Register } from "./register";
import { RegisterService } from "./register.service";
import { NotificationService } from "../shared/notification.service";
import { Router } from "@angular/router"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: Register = new Register();
  public progress: Boolean = false;
  constructor(private router: Router, private register: RegisterService, private registerModel: RegisterModel, private notify: NotificationService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.progress = !this.progress;
    let validate = this.registerModel.validate(this.user);
    if (validate.length > 0) {
      this.notify.error(validate[0].error);
    }
    else {
      this.register.submit(this.user).subscribe((resp: any) => {
        if (resp.status) {
          this.notify.success(resp.message)
          this.router.navigateByUrl("/login");
        }
        else {
          this.notify.error(resp.error);
        }
        this.progress = !this.progress;
      })
    }
  }

}
