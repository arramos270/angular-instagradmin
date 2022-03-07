import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/interfaces/post.interface';
import { Repository } from 'src/app/repo/repository';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  repository: Repository = new Repository;

  constructor() { }

  ngOnInit(): void {
    this.posts.push(this.repository.p1, this.repository.p2);
  }

  

}
