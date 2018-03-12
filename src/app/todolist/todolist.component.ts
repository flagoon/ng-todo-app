import { Component, OnInit } from '@angular/core';
import { ToDoMocks, ITodo } from '../todo-mock';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  constructor() {}

  mocks = [...ToDoMocks];

  ngOnInit() {
    console.log(this.mocks);
  }
}
