import { Component, OnInit } from '@angular/core';
import { JsonplaceService, Todos } from './../../@api'

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {

  constructor(
    private readonly service: JsonplaceService,
  ) { }

  public data: Todos[];

  public loadTodos(): void{
    this.service.getTodos()
        .subscribe(
          (response: Todos[]) => {
            this.data = response
          },
          error => {
            console.error(error)
          }
        )
  }

  ngOnInit() {
    this.loadTodos();
  }

}
