import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../models/Todo';

@Component({
  selector: 'pm-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  index = localStorage.getItem('index') ? Number(localStorage.getItem('index')) : 1;
  pageTitle:string = 'To Do';
  newItem?: Todo;
  data = localStorage.getItem('todo');
  todo: Todo[] = this.data ? JSON.parse(this.data) : [];

  removeTodo(id: number): void{
    this.todo = this.todo.filter(todo => todo.index != id);
    localStorage.setItem('todo', JSON.stringify(this.todo));
  };

  toggleDone(id: number){
    this.todo.forEach(todo => {
      if(todo.index === id){
        todo.done = !todo.done;
      }
    })
    localStorage.setItem('todo', JSON.stringify(this.todo));
  };

  onSubmit(f: NgForm){
    this.addNewTodo(f);
    f.reset();
  };

  private addNewTodo(f: NgForm){
    this.newItem = {index : this.index, content: f.value.content, done: false, prio: f.value.prio}
    this.todo.push(this.newItem);
    localStorage.setItem('todo', JSON.stringify(this.todo));
    this.index++;
    localStorage.setItem('index', String(this.index));
  }
}
