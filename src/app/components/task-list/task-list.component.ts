import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  tasks: Task[] = [];
  message: string = '';
  showAlert: boolean = false;
  toastMessage: string = '';

  @Output() toast = new EventEmitter<string>();
  @Input() filter: string = 'all';
  @Input() showEdit: boolean = true;
  @Input() showDelete: boolean = true;
  @Input() showMarkPending: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filter']) {
      this.loadTasks();
    }
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      // Convierte id a número antes de ordenar
      let sortedTasks = tasks
        .map(task => ({ ...task, id: Number(task.id) }))
        .sort((a, b) => b.id - a.id);

      if (this.filter === 'pending') {
        sortedTasks = sortedTasks.filter(task => !task.completed);
      } else if (this.filter === 'completed') {
        sortedTasks = sortedTasks.filter(task => task.completed);
      }
      this.tasks = sortedTasks;
    });
  }

  showMessage(msg: string) {
    this.message = msg;
    this.showAlert = true;
    setTimeout(() => this.showAlert = false, 2500);
  }

  closeAlert() {
    this.showAlert = false;
  }

  showToast(msg: string) {
    this.toastMessage = msg;
    setTimeout(() => this.toastMessage = '', 2500);
  }

  onTaskAdded(data: { title: string; description: string }) {
    const newTask = {
      title: data.title,
      description: data.description,
      completed: false
    };
    this.taskService.addTask(newTask).subscribe(() => {
      this.loadTasks();
      this.toast.emit('Tarea agregada');
    });
  }

  onToggle(task: Task) {
    this.taskService.updateTask(task).subscribe(() => {
      this.loadTasks();
    });
  }

  onDelete(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
      this.toast.emit('Tarea eliminada');
    });
  }

  onTaskUpdated(task: Task) {
    this.taskService.updateTask(task).subscribe(() => {
      this.loadTasks();
      this.toast.emit('Tarea editada correctamente');
    });
  }
}