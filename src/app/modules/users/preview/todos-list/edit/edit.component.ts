import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '@core/models/todo';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  form: FormGroup = new FormGroup<any>({
    title: new FormControl(''),
    completed: new FormControl(false)
  });

  constructor (
    private dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo
  ) {
    this.form.patchValue(data);
  }
  save () {
    this.dialogRef.close({
      id: this.data.id,
      ...this.form.value
    });
  }

  close () {
    this.dialogRef.close();
  }
}
