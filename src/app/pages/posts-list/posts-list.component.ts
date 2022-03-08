import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { Post } from 'src/app/models/interfaces/post.interface';
import { User } from 'src/app/models/interfaces/user.interface';
import { Repository } from 'src/app/repo/repository';

const actualDate = new Date();

const user2: User = {id: 2,fullname: "Juan Martínez Pérez", username: "juan21", password: "aaaa", avatar: "https://www.cdc.gov/preconception/spanish/images/man-with-arms-crossed.jpg", postsList: [], followers: [], myFollows: [], createdAt: new Date("03/01/2022"), lastEdit: new Date("03/03/2022"), isPublic: false, isAdmin: false};
const user3: User = {id: 3,fullname: "Maria José Ramos", username: "maria95", password: "1111", avatar: "https://us.123rf.com/450wm/mimagephotography/mimagephotography1812/mimagephotography181200205/113230400-primer-plano-retrato-de-hombre-latino-guapo-contra-el-fondo-blanco-aislado.jpg?ver=6", postsList: [], followers: [], myFollows: [], createdAt: new Date("14/05/2020"), lastEdit: actualDate, isPublic: true, isAdmin: false};

const ELEMENT_DATA: Post[] = [
  {title: "Cuanto más acelero", description: "¿Os mola mi nuevo coche rojo?", content: "http://cocheRojo/1", creator: user2, isPublic: true, createdAt: actualDate, comments: []},
  {title: "A tope", description: "Tremendos espaguetis", content: "http://espaguetis/1", creator: user3, isPublic: true, createdAt: actualDate, comments: []};
];

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  displayedColumns: string[] = ['content', 'title', 'creator', 'isPublic'];
  dataSource = ELEMENT_DATA; loggedId$: Observable<any> | undefined;
  userLoggedId: Number = 3; loggedUser: User | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit(): void {
    this.loggedId$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.userLoggedId = Number(params.get('id'));
        ELEMENT_DATA.forEach(post => {
          if(post.creator.id == this.userLoggedId){
            this.loggedUser = post.creator;
          }
        });
        return this.dataSource;
      })
    );
  }


  deletePost(postToDelete: Post){
    const index: number = ELEMENT_DATA.indexOf(postToDelete); //Busca
    ELEMENT_DATA.splice(index, 1); //Borra el post ese
    window.location.reload();
  }

  redirectToLogin(){
    return this.router.navigate(['/login']);
  }
  

}
