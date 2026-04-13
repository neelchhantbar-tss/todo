import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-input.component.html'
})
export class TaskInputComponent {
  @Output() addTask = new EventEmitter<string>();

  taskText = '';

  onAddTask(): void {
    const value = this.taskText.trim();

    if (!value) {
      return;
    }

    this.addTask.emit(value);
    this.taskText = '';
  }
}
