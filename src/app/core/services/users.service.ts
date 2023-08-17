import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Todo } from '@core/models/todo';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _basePath: string = 'https://jsonplaceholder.typicode.com/users/';

  constructor (
    private http: HttpClient
  ) {
  }

  get basePath (): string {
    return this._basePath;
  }

  getUsersList (): Observable<User[]> {
    return this.http.get<User[]>(this.basePath);
  }

  getUser (id: number): Observable<User> {
    return this.http.get<User>(this.basePath + id);
  }

  updateUser (user: User): Observable<User> {
    return this.http.put<User>(this.basePath + user.id, user);
  }

  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.basePath, user);
  }

  getTodos (userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.basePath + userId + '/todos');
  }

  updateTodo (userId: number, todo: Todo) {
    return this.http.put<Todo>(
      this.basePath + userId + '/todos/' + todo.id,
      todo
    );
  }

  addTodo (userId: number, todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(
      this.basePath + userId + '/todos',
      todo
    );
  }
}
