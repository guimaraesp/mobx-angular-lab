import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { TodoStore } from './todo.store';
import { AnotherComponent } from './another/another.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [MobxAngularModule, FormsModule, NgForOf, AnotherComponent],
  template: `
    <div class="container">
      <h1>Todo App with MobX</h1>
      <input [(ngModel)]="newTask" placeholder="Add a new task" />
      <button (click)="addTodo()">Add Task</button>
      <!-- {{ todoStore.value }} -->
      <!-- <ul>
        <li *ngFor="let todo of todoStore.todos">
          {{ todo.task }}
          <button (click)="removeTodo(todo.id)">Remove</button>
        </li>
      </ul> -->

      <app-another></app-another>
    </div>
  `,
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  todoStore = inject(TodoStore);
  newTask: string = '';
  counter: number = 0;

  ngOnInit() {
    // reaction(
    //   () => this.todoStore.value,
    //   () => {
    //     console.log('valor novo:' +
    //        this.todoStore.value);
    //   }
    // );
  }

  addTodo() {
    // if (this.newTask.trim()) {
      // this.todoStore.addTodo(this.newTask.trim());
      this.newTask = '';
      // this.todoStore.value = 'variable changed!!' + this.counter++;
      this.todoStore.setValue('variable changed!!' + this.counter++);
    // }
  }

  removeTodo(id: number) {
    this.todoStore.removeTodo(id);
  }
}
