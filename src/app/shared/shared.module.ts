import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { LoaderComponent } from './components/loader/loader.component';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SelectItemDirective } from './directives/select-item/select-item.directive';



@NgModule({
  declarations: [
    CustomTableComponent,
    LoaderComponent,
    SelectItemDirective
  ],
  exports: [
    CustomTableComponent,
    SelectItemDirective
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatRippleModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
