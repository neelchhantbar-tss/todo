import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) tasks: Task[] = [];
  @Input() showCompleteButton = false;

  @Output() removeTask = new EventEmitter<number>();
  @Output() completeTask = new EventEmitter<number>();

  onRemoveTask(taskId: number): void {
    this.removeTask.emit(taskId);
  }

  onCompleteTask(taskId: number): void {
    this.completeTask.emit(taskId);
  }
}
