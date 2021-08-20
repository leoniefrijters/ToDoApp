import { Component } from '@angular/core';

@Component({
  selector: 'pm-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  pageTitle:string = 'To Do';
  todo = [
    {specific : 'todo', prio : '1'},
    {specific : 'todo2', prio : '2'},
    {specific : 'todo3', prio : '3'}
  ];

  removeTodo(i: number): void{
    
  };
}
