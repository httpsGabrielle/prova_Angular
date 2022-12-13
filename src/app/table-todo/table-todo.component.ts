import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-table-todo',
  templateUrl: './table-todo.component.html',
  styleUrls: ['./table-todo.component.css']
})
export class TableTodoComponent implements OnInit {

  todo: Todo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
