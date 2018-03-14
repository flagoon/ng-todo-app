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
  arraySize = this.mocks.length;

  onClick(mock: ITodo): void {
    console.log(mock);
    mock.done = !mock.done;
  }

  ngOnInit() {
    console.log(this.mocks);
  }
}
