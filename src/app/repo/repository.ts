import { Comment } from "../models/interfaces/comment.interface";
import { Post } from "../models/interfaces/post.interface";
import { User } from "../models/interfaces/user.interface";

export class Repository {
    actualDate = new Date();

    //Users
    userList: User[] = [];
    user1: User = {fullname: "admin", username: "admin", password: "1234", avatar: "http://avatar/1", postsList: [], followers: [], myFollows: [], createdAt: this.actualDate, lastEdit:this.actualDate, isPublic: false, isAdmin: true};
    user2: User = {fullname: "Juan Martínez Pérez", username: "juan21", password: "aaaa", avatar: "http://avatar/2", postsList: [], followers: [], myFollows: [], createdAt: new Date("03/01/2022"), lastEdit: new Date("03/03/2022"), isPublic: false, isAdmin: false};
    user3: User = {fullname: "Maria José Ramos", username: "maria95", password: "1111", avatar: "http://avatar/3", postsList: [], followers: [], myFollows: [], createdAt: new Date("14/05/2020"), lastEdit: this.actualDate, isPublic: true, isAdmin: false};
    user4: User = {fullname: "Jose María Sánchez", username: "jose17", password: "abcd", avatar: "http://avatar/4", postsList: [], followers: [], myFollows: [], createdAt: this.actualDate, lastEdit: this.actualDate, isPublic: true, isAdmin: false};

    //Comments
    c1: Comment = {creator: this.user3, text: "Que guay!", createdAt: this.actualDate };
    c2: Comment = {creator: this.user4, text: "Yo quiero uno", createdAt: this.actualDate};

    //Posts
    p1: Post = {title: "Cuanto más acelero", description: "¿Os mola mi nuevo coche rojo?", content: "http://cocheRojo/1", creator: this.user2, isPublic: true, createdAt: this.actualDate, comments: [this.c1, this.c2]};
    p2: Post = {title: "A tope", description: "Tremendos espaguetis", content: "http://espaguetis/1", creator: this.user3, isPublic: true, createdAt: this.actualDate, comments: []};

    constructor() {
        this.user1.myFollows.push(this.user2, this.user3, this.user4);
        this.user2.followers.push(this.user1, this.user3, this.user4);
        this.user3.myFollows.push(this.user2); this.user3.followers.push(this.user1, this.user4);
        this.user4.myFollows.push(this.user2, this.user3); this.user4.followers.push(this.user1);
        this.userList.push(this.user1, this.user2, this.user3, this.user4);

        this.user2.postsList.push(this.p1);
        this.user3.postsList.push(this.p2);
     }
}