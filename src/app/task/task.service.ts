import {EventEmitter, Injectable} from '@angular/core';
import {Task} from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskListChange = new EventEmitter<Task[]>();
  private tasks: Task[] = [
    new Task('Hello World', false, 1),
    new Task('Learn Angular', false, 2),
    new Task('Lunch is over', false, 3)
  ];

  constructor() { }

  getTasks() {
    return this.tasks.slice();
  }

  addTask(newTask: Task) {
    this.tasks.push(newTask);
    this.taskListChange.emit(this.tasks.slice());
  }

  updateTask(updatedTask: Task) {
    this.tasks = this.tasks.map(task => {
      if (task.id !== updatedTask.id) {
        return task;
      } else {
        return {...task, completed: !updatedTask.completed};
      }
    });
    this.taskListChange.emit(this.tasks.slice());
  }

  deleteTask() {
    this.tasks = this.tasks.filter(task => task.completed !== true);
    this.taskListChange.emit(this.tasks.slice());
  }
}
