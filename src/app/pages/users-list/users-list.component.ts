import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isObservable, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/interfaces/user.interface';

const actualDate = new Date();

const ELEMENT_DATA: User[] = [
  {id: 1,fullname: "admin", username: "admin", password: "1234", avatar: "http://avatar/1", postsList: [], followers: [], myFollows: [], createdAt: actualDate, lastEdit: actualDate, isPublic: false, isAdmin: true},
  {id: 2,fullname: "Juan Martínez Pérez", username: "juan21", password: "aaaa", avatar: "http://avatar/2", postsList: [], followers: [], myFollows: [], createdAt: new Date("03/01/2022"), lastEdit: new Date("03/03/2022"), isPublic: false, isAdmin: false},
  {id: 3,fullname: "Maria José Ramos", username: "maria95", password: "1111", avatar: "http://avatar/3", postsList: [], followers: [], myFollows: [], createdAt: new Date("14/05/2020"), lastEdit: actualDate, isPublic: true, isAdmin: false},
  {id: 4,fullname: "Jose María Sánchez", username: "jose17", password: "abcd", avatar: "http://avatar/4", postsList: [], followers: [], myFollows: [], createdAt: actualDate, lastEdit: actualDate, isPublic: true, isAdmin: false},
];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['avatar', 'username', 'fullname', 'isAdmin'];
  dataSource = ELEMENT_DATA;
  loggedUserId: Number | undefined;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.loggedUserId = Number(params.get('id'));
      })
    );
  }


  changeAdmin(newAdmin: User){
    const index: number = ELEMENT_DATA.indexOf(newAdmin); //Busca
    ELEMENT_DATA.splice(index, 1, newAdmin); //Borra y sustituye
    window.location.reload();
  }

}
