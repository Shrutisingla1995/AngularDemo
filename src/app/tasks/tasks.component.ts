import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  taskList: any = [];
  constructor() { }

  ngOnInit() {
  }
  addTask(task){
    this.taskList.push(task.value);
    console.log(this.taskList)
    task.value = ''
  }
  deleteTask(task,i){
    this.taskList.splice(i, 1);
  }
}
