import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Column } from './model/column';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit, AfterViewInit {
  @Input() columns: Column[];
  @Input() data: any[];

  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  selectedRow: any;
  displayedColumns: string[] = [];

  ngOnInit () {
    this.displayedColumns = this.columns.map(column => {
      return column.id;
    });

    this.dataSource.connect().next(this.data);
  }

  ngAfterViewInit () {
  }

  onRowClick (row: any) {
    this.selectedRow = row;
    this.rowClicked.emit(row);
  }

  getValue (element: any, columnId: string): string {
    return element[columnId];
  }
}
