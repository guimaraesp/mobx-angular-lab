import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoStore } from '../todo.store';
import { MobxAngularModule } from 'mobx-angular';
import { autorun, reaction } from 'mobx';

@Component({
  selector: 'app-another',
  standalone: true,
  imports: [MobxAngularModule],
  template: `
    <div>
      {{ todoStore.value }}
    </div>
  `,
  styleUrl: './another.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnotherComponent {
  todoStore = inject(TodoStore);

  ngOnInit() {

    autorun(() => this.todoStore.value);

    reaction(
      () => this.todoStore.value,
      () => {
        console.log('valor novo:' +
           this.todoStore.value);
      }
    );

  }
}
