import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notifier: NotifierService) { }
  error(message: string) {
    this.notifier.notify("error", message);
  }
  success(message: string) {
    this.notifier.notify("success", message);
  }
  warn(message: string) {
    this.notifier.notify("warning", message);
  }
}
