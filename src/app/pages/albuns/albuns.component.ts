import { Component, OnInit } from '@angular/core';
import { JsonplaceService, Albums } from './../../@api'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit {

  constructor(
    private readonly service: JsonplaceService,
  ) { }

  public data: Albums[];

  public loadAlbums(): void{
    this.service.getAlbums()
        .subscribe(
          (response: Albums[])=>{
             this.data = response
          },
          error => {
            console.log(error);
          }
         )
  }

  ngOnInit() {
    this.loadAlbums();
  }

}
