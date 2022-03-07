import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/interfaces/user.interface';
import { Repository } from 'src/app/repo/repository';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() userInput!: User;
  @Output() userSelectedEvent = new EventEmitter<User>();
  repository: Repository = new Repository;

  constructor() { }

  ngOnInit(): void {
  }

  onPersonClick(){
    this.userSelectedEvent.emit(this.userInput);
  }

  changeAdmin(){
    const index: number = this.repository.userList.indexOf(this.userInput);
    this.repository.userList.forEach(user => {
      if(this.userInput.id == user.id) {
        !this.userInput.isAdmin;
        this.repository.userList.splice(index, 1, this.userInput); //Empieza, borra X, inserta
      }
    });
  }

}
