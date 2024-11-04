import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prof } from '../classes/prof';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfServiceService {
  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8081';

  addProf(newProf:Prof):Observable<Prof>{
    return this.http.post<Prof>(`${this.baseUrl}/profs`,newProf);
  }

  getProfesseurs(): Observable<Prof[]> {
    return this.http.get<Prof[]>('http://localhost:8081/profs');
  }
  
  getProf(id:Number): Observable<Prof> {
    return this.http.get<Prof>(`${this.baseUrl}/prof/${id}`);
  }
}
