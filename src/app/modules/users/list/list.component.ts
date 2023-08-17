import { Component, OnInit } from '@angular/core';
import { UsersService } from '@core/services/users.service';
import { User } from '@core/models/user';
import { Observable } from 'rxjs';
import { Column } from '@shared/components/custom-table/model/column';
import { usersColumns } from '@modules/users/list/users-columns';
import { Router } from '@angular/router';

@Component({
  selector: 'users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users$: Observable<User[]>;
  columns: Column[] = usersColumns;

  constructor (
    private router: Router,
    private usersService: UsersService
  ) {
  }

  ngOnInit () {
    this.getUsersList();
  }

  getUsersList () {
    this.users$ = this.usersService.getUsersList();
  }

  showUserInfo (user: User) {
    this.router.navigate(['/users', user.id ]);
  }
}
