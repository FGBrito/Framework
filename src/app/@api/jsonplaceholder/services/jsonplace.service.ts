import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts, Albums, Todos } from './types'

@Injectable({
  providedIn: 'root'
})
export class JsonplaceService {

  constructor( private readonly http: HttpClient ) { }

  private baseUrl = 'https://jsonplaceholder.typicode.com/';

  public getPost(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.baseUrl+"posts");
  }
  public getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>(this.baseUrl+"albums");
  }
  public getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this.baseUrl+"todos")
  }

}
