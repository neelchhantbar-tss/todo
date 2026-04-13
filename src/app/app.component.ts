import { Component } from '@angular/core';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskInputComponent, TaskListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  tasks: Task[] = [];
  nextId = 1;

  get totalTasks(): Task[] {
    return this.tasks.filter((task) => !task.completed);
  }

  get completedTasks(): Task[] {
    return this.tasks.filter((task) => task.completed);
  }

  addTask(taskText: string): void {
    this.tasks.push({
      id: this.nextId,
      text: taskText,
      completed: false
    });
    this.nextId += 1;
  }

  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  completeTask(taskId: number): void {
    this.tasks = this.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
  }
}
