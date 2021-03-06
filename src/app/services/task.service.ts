import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../components/Task';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) { }
  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  delete(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }
  updateToggle(tas: Task): Observable<Task> {
    const url = `${this.apiUrl}/${tas.id}`
    return this.http.put<Task>(url, tas)
  }
  addT(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
}
