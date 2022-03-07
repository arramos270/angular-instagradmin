import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { PostsListComponent } from '../pages/posts-list/posts-list.component';
import { UsersListComponent } from '../pages/users-list/users-list.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path: 'posts',component: PostsListComponent },
  { path: 'users',component: UsersListComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
