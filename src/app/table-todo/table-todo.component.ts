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
  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    this.todoService.getTodo()
        .subscribe(todo => this.todo = todo );
  }
}
