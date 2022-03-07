import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User, UserResponse } from 'src/app/models/interfaces/user.interface';
import { Repository } from 'src/app/repo/repository';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  repository: Repository = new Repository;
  userSelected!: User;
  listaUsuarios: User[] = [];

  constructor() {
   }

  ngOnInit(): void {
    this.listaUsuarios = this.repository.userList;
    this.getUsers();
  }

  getUsers(){
    this.listaUsuarios.forEach;
  }

  changeAdmin(newAdmin: User){
    this.listaUsuarios.forEach(usuario => {
      if(newAdmin.id == usuario.id) {
        !usuario.isAdmin;
        this.repository.userList = this.listaUsuarios;
      }
    });
  }

}
