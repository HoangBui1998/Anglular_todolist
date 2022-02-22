import { Subscription } from 'rxjs';
import { UiService } from './../../services/ui.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() AddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  subscription: Subscription;
  showAddTask: boolean;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.text) {
      alert('please add Task');
      return;
    }
    const taskAdd = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.text = "";
    this.day = "";
    this.reminder = false;
    this.AddTask.emit(taskAdd);
  }

}
