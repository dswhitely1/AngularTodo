import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @ViewChild('taskName', {static: false}) taskInputRef: ElementRef;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onHandleAddTask(e) {
    e.preventDefault();
    const newTask = new Task(this.taskInputRef.nativeElement.value, false, Date.now());
    this.taskService.addTask(newTask);
    this.taskInputRef.nativeElement.value = '';
  }
}
