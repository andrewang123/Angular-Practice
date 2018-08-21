import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post;

  // dependancy injection
  constructor(private route: ActivatedRoute,
              private postService: PostService,
  ) { }

  ngOnInit() {
    // getting the parameter from the URL
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.postService.getPost(id).subscribe(post => this.post = post)
  }

}
