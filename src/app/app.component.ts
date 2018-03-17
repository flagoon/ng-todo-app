import { Component, OnInit } from '@angular/core';
import { ITodo } from './itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  longCondition = false;
  longTodo: ITodo = {
    value: '',
    done: false
  };

  OnInit() {}

  somethingHovered(testval) {
    if (testval.value.length > 25) {
      this.longCondition = true;
      this.longTodo = testval;
    } else {
      this.longCondition = false;
    }
  }
}
