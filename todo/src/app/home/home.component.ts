import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoList = [];
  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.todoService.loadTodoList();
  }
}
