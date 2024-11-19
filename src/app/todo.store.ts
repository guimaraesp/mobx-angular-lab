import { Injectable } from '@angular/core';
import { makeAutoObservable } from 'mobx';
import { action, observable } from 'mobx-angular';

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
  todos: { id: number; task: string }[] = [];
  nextId: number = 1;
  @observable value: string = 'variable1';

    constructor() {
      makeAutoObservable(this);
    }

  addTodo(task: string) {
    this.todos.push({ id: this.nextId++, task });
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  @action setValue(value: string) {
    this.value = value;
  }
}

// export const todoStore = new TodoStore();
