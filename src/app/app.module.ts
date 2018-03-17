import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ShortStringPipe } from './todolist/short-string.pipe';
import { TodoMockService } from './todo-mock.service';
@NgModule({
  declarations: [AppComponent, TodolistComponent, ShortStringPipe],
  imports: [BrowserModule, FormsModule],
  providers: [TodoMockService],
  bootstrap: [AppComponent]
})
export class AppModule {}
