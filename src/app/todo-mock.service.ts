import { Injectable } from '@angular/core';
import { ITodo } from './itodo';
import { ToDoMocks } from './todo-mock';
@Injectable()
export class TodoMockService {

  constructor() { }

  private todos: ITodo[] = ToDoMocks;

  public getData():ITodo[] {
    return this.todos
  }
}
