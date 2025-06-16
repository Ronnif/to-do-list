// ...otros imports...
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deleted = new EventEmitter<number>();
  @Output() toggled = new EventEmitter<Task>();
  @Output() updated = new EventEmitter<Task>();

  @Input() showEdit: boolean = true;
  @Input() showDelete: boolean = true;
  @Input() showMarkPending: boolean = false;

  editing = false;
  editTitle = '';
  editDescription = '';

  deleteTask() {
    if (this.task.id !== undefined && this.task.id !== null) {
      this.deleted.emit(Number(this.task.id)); // <-- Asegura que sea number
    }
  }

  toggleComplete() {
    // Emitimos una copia modificada, no el objeto original
    this.toggled.emit({ ...this.task, completed: !this.task.completed });
  }

  startEdit() {
    this.editing = true;
    this.editTitle = this.task.title;
    this.editDescription = this.task.description;
  }

  saveEdit() {
    this.editing = false;
    // Emitimos una copia modificada, no el objeto original
    this.updated.emit({
      ...this.task,
      title: this.editTitle,
      description: this.editDescription
    });
  }

  cancelEdit() {
    this.editing = false;
  }

  markAsPending() {
    // Emitimos una copia modificada, no el objeto original
    this.toggled.emit({ ...this.task, completed: false });
  }
}