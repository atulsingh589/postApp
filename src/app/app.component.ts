import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar"
import { MatGridList } from '@angular/material/grid-list';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'postListApp';
}
