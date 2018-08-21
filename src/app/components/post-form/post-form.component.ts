import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
// EventEmitter allows passing data from component to component
// output
import { Post } from '../../models/Post'
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() currentPost: Post; // take in current post from post componet
  @Input() isEdit: boolean; // take in curent isEdit from post component
  @Output() newPost: EventEmitter<Post> = new EventEmitter(); // send out new post to anywhere
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter(); // send out new post to anywhere
  constructor(private postService: PostService) { }

  ngOnInit() {

  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe(editPost => {
      console.log(editPost);
      this.isEdit = false;
      this.updatedPost.emit(editPost);
    });
  }

  addPost(title, body) {
    if(!title || !body) {
      alert("Please add post");
    } else {
      // as post is us telling the javascript compiler that he is wrong
      // post is taking id title and body, using as post overrides that to say we only need title and body
      this.postService.savePost({title, body} as Post).subscribe(post => {
        //console.log(post);
        this.newPost.emit(post); // post from anony function
        // EMITS THE POST SO SOMEONE ELSE CAN USE IT
      });
    }
  }

}
