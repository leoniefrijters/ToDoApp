import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../models/Todo';

@Component({
  selector: 'pm-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  index = 1;
  pageTitle:string = 'To Do';
  newItem?: Todo;
  todo: Todo[] = [];

  removeTodo(id: number): void{
    this.todo = this.todo.filter(todo => todo.index != id);
  };

  toggleDone(id: number){
    this.todo.forEach(todo => {
      if(todo.index === id){
        todo.done = !todo.done;
      }
    })
  };

  onSubmit(f: NgForm){
    this.newItem = {index : this.index, content: f.value.content, done: false, prio: f.value.prio}
    this.todo.push(this.newItem);
    this.index++;
    f.reset();
  };
}
