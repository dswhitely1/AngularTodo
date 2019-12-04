import { Component, OnInit } from '@angular/core';
import {Task} from '../task.model';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.taskService.taskListChange.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  toggleComplete(task: Task) {
    this.taskService.updateTask(task);
  }

  clearCompleted() {
    this.taskService.deleteTask();
  }
}
