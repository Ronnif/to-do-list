import { Component, Output, EventEmitter, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<{ title: string; description: string }>();
  taskForm: FormGroup;

  private fb = inject(FormBuilder);

  constructor() {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addTask() {
    if (this.taskForm.valid) {
      this.taskAdded.emit(this.taskForm.value);
      this.taskForm.reset();
    }
  }

  cancelAdd() {
    this.taskForm.reset();
  }
}