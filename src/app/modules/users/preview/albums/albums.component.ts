import { afterRender, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '@core/models/album';
import { AlbumsService } from '@core/services/albums.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '@core/models/photo';
import { MatDialog } from '@angular/material/dialog';
import { PhotoComponent } from '@modules/users/preview/albums/photo/photo.component';

@Component({
  selector: 'user-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  userId: number;
  albums$: Observable<Album[]>;
  photos$: Observable<Photo[]>;
  selectedAlbum: Album;

  constructor (
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit () {
    this.getAlbums();
  }

  getAlbums () {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.albums$ = this.albumsService.getList(this.userId);
    });
  }

  getPhotos (album: Album) {
    this.selectedAlbum = album;
    this.photos$ = this.albumsService.getPhotos(album.id);
  }

  showPhotoPreview (photo: Photo) {
    this.dialog.open(PhotoComponent, {
      data: photo
    });
  }
}
