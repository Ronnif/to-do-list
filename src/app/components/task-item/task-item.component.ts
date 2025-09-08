import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deleted = new EventEmitter<string>(); // Cambiado a string
  @Output() toggled = new EventEmitter<Task>();
  @Output() updated = new EventEmitter<Task>();

  @Input() showEdit: boolean = true;
  @Input() showDelete: boolean = true;
  @Input() showMarkPending: boolean = false;

  editing = false;
  editTitle = '';
  editDescription = '';

  deleteTask() {
    if (this.task._id) {
      this.deleted.emit(this.task._id); // Emitimos el _id (string)
    }
  }

  toggleComplete() {
    this.toggled.emit({ ...this.task, completed: !this.task.completed });
  }

  startEdit() {
    this.editing = true;
    this.editTitle = this.task.title;
    this.editDescription = this.task.description ?? ''; // Si es undefined, asigna ''
  }

  saveEdit() {
    this.editing = false;
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
    this.toggled.emit({ ...this.task, completed: false });
  }
}