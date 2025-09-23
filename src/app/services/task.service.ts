import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageKey = 'tasks';

  private getStoredTasks(): Task[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  getTasks(): Observable<Task[]> {
    return of(this.getStoredTasks());
  }

  addTask(task: Omit<Task, 'id'>): Observable<Task> {
    const tasks = this.getStoredTasks();
    const newTask: Task = {
      ...task,
      id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1
    };
    tasks.push(newTask);
    this.saveTasks(tasks);
    return of(newTask);
  }

  updateTask(task: Task): Observable<Task> {
    const tasks = this.getStoredTasks().map(t => t.id === task.id ? task : t);
    this.saveTasks(tasks);
    return of(task);
  }

  deleteTask(id: number): Observable<any> {
    const tasks = this.getStoredTasks().filter(t => t.id !== id);
    this.saveTasks(tasks);
    return of({ success: true });
  }
}