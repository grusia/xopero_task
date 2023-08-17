import { Component, OnInit } from '@angular/core';
import { User } from '@core/models/user';
import { UsersService } from '@core/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { userForm } from '@modules/users/preview/info/user-form';

@Component({
  selector: 'user-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  private user: User;
  private userId: number;

  editingMode: boolean = false;

  userForm = userForm;

  constructor (
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
  }

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.getUserInfo();
    });
    // this.userForm.disable();
  }

  switchEditingMode () {
    this.editingMode = !this.editingMode;
    // if (this.editingMode) {
    //   this.userForm.enable();
    // } else {
    //   this.userForm.disable();
    // }
  }

  getUserInfo () {
    this.usersService.getUser(this.userId)
      .subscribe((user: User) => {
        this.user = user;
        this.userForm.patchValue(user);
      });
  }

  save () {
    this.usersService.updateUser({
      id: this.user.id,
      ...this.userForm.value
    } as User).subscribe((user: User) => {
      this.user = user;
    });
  }

  cancelEditing () {
    this.userForm.patchValue(this.user);
  }
}
