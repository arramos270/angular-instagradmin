import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Repository } from 'src/app/repo/repository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  repository: Repository = new Repository;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getFormData(username: String, pass: String) { //Esto lo deberíamos hacer llamando a la API, pero la mía no está preparada para esto
    this.repository.userList.forEach(user => {  //En su lugar, he creado un pequeño repositorio para guardarlo todo
      if(user.username == username && user.password == pass){
        return this.router.navigate(['/users', { isAdmin: user.isAdmin ? user.isAdmin : null}]);
      } else {
        return alert("Ese usuario no existe"); 
      }
    });
    
  }
}
