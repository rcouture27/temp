import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  title = "";
  content = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
      'http://localhost:3000/api/Angulars',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts(); 
   }

  onClearPosts(id: number) {
    // Send Http request
    this.http.delete('http://localhost:3000/api/Angulars/' + id).subscribe();
  }
  
  private fetchPosts() {
    this.http.get('http://0.0.0.0:3000/api/Angulars')
    .subscribe(posts => {
    console.log(posts);
    });
  }

  onUpdatePosts(postData: { title: string; content: string; id: number}) {
    this.http.put('http://0.0.0.0:3000/api/Angulars', postData).subscribe(posts => {
      console.log(posts);
    });
  }
}
