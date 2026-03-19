import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrls: ['./table.scss']
})
export class TableComponent {

  @Input() data: any[] = [];
  @Input() columns: string[] = [];

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

  onEdit(row: any) {
    this.edit.emit(row);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }
}