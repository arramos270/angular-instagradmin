import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { HttpClient } from '@angular/common/http';
import { UserSelectedComponent } from './components/user-selected/user-selected.component';
import { UserItemComponent } from './components/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersListComponent,
    PostsListComponent,
    UserSelectedComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    MaterialImportsModule,
    HttpClient,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }