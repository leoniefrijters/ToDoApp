import { Component } from '@angular/core';

@Component({
  selector: 'pm-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  pageTitle:string = 'To Do';
  todo = [
    {content : 'todo', done : true, prio : '1'},
    {content : 'todo2', done : false, prio : '2'},
    {content : 'todo3', done : false, prio : '3'}
  ];

  removeTodo(id: number): void{
    this.todo = this.todo.filter((v,i) => i !== id);
  };

  toggleDone(id: number){
    this.todo.map((v, i) => {
      if (i == id) v.done = !v.done;
      return v;   
    });
  };
}
