import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Photo } from '@core/models/photo';

@Component({
  selector: 'photo-preview',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  constructor (
    private dialogRef: MatDialogRef<PhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Photo
  ) {
  }

  close () {
    this.dialogRef.close();
  }
}
