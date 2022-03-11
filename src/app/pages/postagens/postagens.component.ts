import { Component, OnInit } from '@angular/core';
import { JsonplaceService, Posts } from '../../@api';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.scss']
})
export class PostagensComponent implements OnInit {

  constructor(
    private readonly service: JsonplaceService
  ) { }
  public data: Posts[];
  title = 'Postagens';

  private loadPosts(): void {
    this.service
      .getPost()
      .subscribe(
        (response: Posts[]) => {
          this.data = response;
        },
        error => {
          console.log(error);
        }
      )
  }

  ngOnInit() {
    this.loadPosts();
  }

}
