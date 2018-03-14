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

  onSubmit(form) {
    const value = form.form.value.add_todo;
    const todo: ITodo = Object.assign({}, { value: value }, { done: false });
    console.log(todo);
    this.mocks.unshift(todo);
    form.reset();
  }

  ngOnInit() {
    console.log(this.mocks);
  }
}
