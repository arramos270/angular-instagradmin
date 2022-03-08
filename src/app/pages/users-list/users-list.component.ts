import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/models/interfaces/user.interface';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const actualDate = new Date();

const ELEMENT_DATA: User[] = [
  {id: 1,fullname: "admin", username: "admin", password: "1234", avatar: "https://cdn.dribbble.com/users/206362/screenshots/14453538/media/cfe80febeed64218b34e18f518ca9ae9.jpg", postsList: [], followers: [], myFollows: [], createdAt: actualDate, lastEdit: actualDate, isPublic: false, isAdmin: true},
  {id: 2,fullname: "Juan Martínez Pérez", username: "juan21", password: "aaaa", avatar: "https://www.cdc.gov/preconception/spanish/images/man-with-arms-crossed.jpg", postsList: [], followers: [], myFollows: [], createdAt: new Date("03/01/2022"), lastEdit: new Date("03/03/2022"), isPublic: false, isAdmin: false},
  {id: 3,fullname: "Maria José Ramos", username: "maria95", password: "1111", avatar: "https://us.123rf.com/450wm/mimagephotography/mimagephotography1812/mimagephotography181200205/113230400-primer-plano-retrato-de-hombre-latino-guapo-contra-el-fondo-blanco-aislado.jpg?ver=6", postsList: [], followers: [], myFollows: [], createdAt: new Date("14/05/2020"), lastEdit: actualDate, isPublic: true, isAdmin: false},
  {id: 4,fullname: "Jose María Sánchez", username: "jose17", password: "abcd", avatar: "https://media.istockphoto.com/photos/portrait-of-young-smiling-caucasian-man-with-crossed-arms-wearing-picture-id1171169107?k=20&m=1171169107&s=612x612&w=0&h=VkbOnU3zWYCbh3ojzqWFhK7JObxQduGzr4bRxqbgkLU=", postsList: [], followers: [], myFollows: [], createdAt: actualDate, lastEdit: actualDate, isPublic: true, isAdmin: false},
];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['avatar', 'username', 'fullname', 'isAdmin'];
  dataSource = ELEMENT_DATA; loggedId$: Observable<any> | undefined;
  userLoggedId: Number = 3; loggedUser: User | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit(): void {
    this.loggedId$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.userLoggedId = Number(params.get('id'));
        ELEMENT_DATA.forEach(user => {
          if(user.id == this.userLoggedId){
            this.loggedUser = user;
          }
        });
        return this.dataSource;
      })
    );
  }


  changeAdmin(newAdmin: User){
    const index: number = ELEMENT_DATA.indexOf(newAdmin); //Busca
    ELEMENT_DATA.splice(index, 1, newAdmin); //Borra y sustituye
    window.location.reload();
  }

  redirectToLogin(){
    return this.router.navigate(['/login']);
  }

}
