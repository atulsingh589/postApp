import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }, { path: 'post', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
