
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  @Output() ToggleEvent: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(tas: Task) {
    this.deleteTask.emit(tas);
  }
  onToggle(task: Task) {
    this.ToggleEvent.emit(task)
  }
}
