import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserPreviewComponent } from './preview/user-preview.component';

const routes: Routes = [{
  path: '',
  component: ListComponent
}, {
  path: ':id',
  component: UserPreviewComponent
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
