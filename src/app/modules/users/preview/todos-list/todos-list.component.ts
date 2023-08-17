import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '@core/models/todo';
import { UsersService } from '@core/services/users.service';
import { Column } from '@shared/components/custom-table/model/column';
import { todosColumns } from '@modules/users/preview/todos-list/todos-columns';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '@modules/users/preview/todos-list/edit/edit.component';

@Component({
  selector: 'user-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  todosColumns: Column[] = todosColumns;
  userId: number;
  todos: Todo[];
  selected: Todo;

  constructor (
    private route: ActivatedRoute,
    private usersService: UsersService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.getTodosList();
    });
  }

  getTodosList () {
    this.usersService.getTodos(this.userId)
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  addTodo () {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '300px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(
      todo => {
        if (todo) {
          this.usersService.addTodo(this.userId, todo).subscribe(
            () => {
              this.getTodosList();
            }
          );
        }
      }
    );
  }

  editTodo () {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '300px',
      data: this.selected
    });
    dialogRef.afterClosed().subscribe(
      todo => {
        this.usersService.updateTodo(this.userId, todo).subscribe(
          () => {
            this.getTodosList();
          }
        );
      }
    );
  }
}
