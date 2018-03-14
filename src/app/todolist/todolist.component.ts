import { Component, OnInit } from '@angular/core';
import { ToDoMocks, ITodo } from '../todo-mock';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  constructor() {}

  mocks = [...ToDoMocks];

  onClick(mock: ITodo): void {
    const index = this.mocks.indexOf(mock);
    if (!mock.done) {
      mock.done = !mock.done;
      console.log(`[${mock.value}] was done.`);
    } else {
      this.mocks.splice(index, 1);
    }
  }

  ngOnInit() {
    console.log(this.mocks);
  }
}
