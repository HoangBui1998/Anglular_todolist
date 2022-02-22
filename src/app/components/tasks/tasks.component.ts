import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../../services/task.service'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((task) => { this.tasks = task });
  }
  delete(task: Task) {
    this.taskService.delete(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)
    ));
  }
  Toggle(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateToggle(task).subscribe();
  }
  Add(t: Task) {
    this.taskService.addT(t).subscribe((t) => this.tasks.push(t));
  }
}
