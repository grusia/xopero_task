import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { UserPreviewComponent } from './preview/user-preview.component';
import { TodosListComponent } from './preview/todos-list/todos-list.component';
import { InfoComponent } from '@modules/users/preview/info/info.component';
import { MatIconModule } from '@angular/material/icon';
import { UsersRoutingModule } from '@modules/users/users-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { AlbumsComponent } from './preview/albums/albums.component';
import { EditComponent } from './preview/todos-list/edit/edit.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { PhotoComponent } from './preview/albums/photo/photo.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    ListComponent,
    UserPreviewComponent,
    TodosListComponent,
    InfoComponent,
    AlbumsComponent,
    EditComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatTooltipModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class UsersModule { }
