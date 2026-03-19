import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../shared/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/users'; // mock API

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addStudent(student: Student): Observable<any> {
    return this.http.post(this.baseUrl, student);
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(`${this.baseUrl}/${student.id}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}