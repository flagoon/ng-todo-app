import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDoMocks } from '../todo-mock';
import { ITodo } from '../itodo';
import { TodoMockService } from '../todo-mock.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  constructor(private service: TodoMockService) {}

  @Output() somethingHovered = new EventEmitter<ITodo>();

  mocks = this.service.getData();

  public onClick(mock: ITodo): void {
    const index = this.mocks.indexOf(mock);
    if (!mock.done) {
      mock.done = !mock.done;
      console.log(`[${mock.value}] was done.`);
    } else {
      this.mocks.splice(index, 1);
    }
  }

  onHover(mock: ITodo): void {
    this.somethingHovered.emit(mock);
  }

  onSubmit(form) {
    const value = form.form.value.add_todo;
    if (value) {
      const todo: ITodo = Object.assign({}, { value }, { done: false });
      console.log(todo);
      this.mocks.unshift(todo);
    } else {
      alert(`Can't add empty field.`);
    }
    form.reset();
  }

  ngOnInit() {
    console.log(this.mocks);
  }
}
