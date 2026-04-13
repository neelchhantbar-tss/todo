import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent {
  @Input({ required: true }) task!: Task;
  @Output() remove = new EventEmitter<number>();
  @Output() complete = new EventEmitter<number>();

  onRemove(): void {
    this.remove.emit(this.task.id);
  }

  onComplete(): void {
    this.complete.emit(this.task.id);
  }
}
