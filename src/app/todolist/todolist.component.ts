import { Component, OnInit } from '@angular/core';
import { ToDoMocks, ITodo } from '../todo-mock';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  constructor() {}

  selectedMock: ITodo;
  isDone: boolean = false;
  value: string = 'Done';

  mocks = [...ToDoMocks];
  arraySize = this.mocks.length;

  onClick(mock: ITodo): void {
    this.value = 'bum';
    this.isDone = true;
    console.log(mock);
    this.selectedMock = mock;
  }

  ngOnInit() {
    console.log(this.mocks);
  }
}
