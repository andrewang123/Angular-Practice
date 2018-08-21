import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post'
import { PostService } from '../../services/post.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
        //console.log(posts);
        this.post = posts;
    });
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }
  // catch the post FROM the post-form component and add it to list
  onNewPost(post: Post) {
    this.post.unshift(post);
  }

  removePost(post: Post) {
    if(confirm('Are You Sure?')) {
      this.postService.removePost(post.id).subscribe(() => {
        this.post.forEach((cur, index) => {
          if(post.id === cur.id) {
            this.post.splice(index, 1);  
          }
        });
      });
    }
  }

  onUpdatedPost(post: Post) {

    this.post.forEach((curPost, index) => {
      if(curPost.id === post.id) {
        this.post.splice(index, 1);
        this.post.unshift(post); // move back to top
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        };
      }
    });

  }

}
