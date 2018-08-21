import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'; // have to also include in app.modules
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = this.postUrl + "/" + id;
    return this.http.delete<Post>(url, httpOptions);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(this.postUrl + "/" + post.id, post, httpOptions);
  }

  getPosts() : Observable<Post[]> {
    // the http service, 
    //the observable return type
     //the url of for the get request
    return this.http.get<Post[]>(this.postUrl);

  }

  getPost(id: number) : Observable<Post> {
    const url = this.postUrl+ '/' + id;
    return this.http.get<Post>(url);
  }

  savePost(post: Post): Observable<Post> {
    //first param is the url
    //second is the actual post object
    //the headers being sent
    return this.http.post<Post>(this.postUrl, post, httpOptions);

  }
}
