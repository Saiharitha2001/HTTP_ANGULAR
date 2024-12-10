import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPosts } from '../posts-model';
import { HttpService } from 'src/app/services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 
  posts: IPosts[] = [];
  subscription = Subscription;
 
  constructor(private http: HttpService) { }
 
  ngOnInit(): void {
    this.loadPosts();
  }
 
  loadPosts() {
    this.http.getData('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (data) =>{
        this.posts = data as IPosts[];
      },
      error: (reason: any) => console.log(reason),
      complete: () => console.log("completed")
    });
}


}


