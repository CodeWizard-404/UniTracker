import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Completion } from '../classes/completion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompletionService {
  private Url = 'http://localhost:8081'; 

  constructor(private http: HttpClient) {}
  getCompletion(idEtd: number,idTache:number): Observable<Completion> {
    const url = `${this.Url}/completion?idEtd=${idEtd}&idTache=${idTache}`;
    return this.http.get<Completion>(url);
  }
  markTaskAsCompleted(idcomp: number, isCompleted: boolean): Observable<Completion> {
    const url = `${this.Url}/realisation/mark?idcomp=${idcomp}&isCompleted=${isCompleted}`;
    return this.http.post<Completion>(url, null); // Sending null body since we're using query params
  }
  chooseDiff(idcomp: number, complexite: String): Observable<Completion> {
    const url = `${this.Url}/realisation/difficulty?idcomp=${idcomp}&complexite=${complexite}`;
    return this.http.post<Completion>(url, null); // Sending null body since we're using query params
  }

  
}
