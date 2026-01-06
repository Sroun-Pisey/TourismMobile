import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api'; // Change to your Laravel base URL

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allPosts`);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/showPost/${id}`);
  }
}
