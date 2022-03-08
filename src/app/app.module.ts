import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog/dialog-module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersListComponent,
    PostsListComponent,
  ],
  imports: [
    BrowserModule,
    MaterialImportsModule,
    HttpClient,
    HttpClientModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
