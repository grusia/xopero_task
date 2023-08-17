import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private _basePath: string = 'https://jsonplaceholder.typicode.com/';

  constructor (
    private http: HttpClient
  ) { }

  get basePath (): string {
    return this._basePath;
  }

  getList (userId: number): Observable<Album[]> {
    return this.http.get<Album[]>(
      this.basePath + 'users/' + userId + '/albums');
  }

  getPhotos (albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(
      this.basePath + 'albums/' + albumId + '/photos');
  }
}
