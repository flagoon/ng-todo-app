import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../todo-mock';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor() {}

  @Input() mock: ITodo;

  selected = false;

  onClick(mock: ITodo): void {
    this.selected = !this.selected;
  }

  ngOnInit() {}
}
