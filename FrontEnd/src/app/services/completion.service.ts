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
  addComment(idTache:number, idEtd: number,comment: String): Observable<Completion>{
    const url = `${this.Url}/realisation/comment?tacheId=${idTache}&etudiantId=${idEtd}&comment=${comment}`;
    return this.http.put<Completion>(url, null)

  }
  getCompletion(idEtd: number,idTache:number): Observable<Completion> {
    const url = `${this.Url}/completion?idEtd=${idEtd}&idTache=${idTache}`;
    return this.http.get<Completion>(url);
  }
  markTaskAsCompleted(idTache:number, idEtd: number,isCompleted: boolean): Observable<Completion> {
    const url = `${this.Url}/realisation/mark?tacheId=${idTache}&etudiantId=${idEtd}&isCompleted=${isCompleted}`;
    return this.http.post<Completion>(url, null); // Sending null body since we're using query params
  }
  markSubTaskAsCompleted(idTache:number, idEtd: number,isCompleted: boolean): Observable<Completion> {
    const url = `${this.Url}/realisation/mark/subTask?tacheId=${idTache}&etudiantId=${idEtd}&isCompleted=${isCompleted}`;
    return this.http.post<Completion>(url, null); // Sending null body since we're using query params
  }

 chooseDiff(idTache:number, idEtd: number,complexite: String): Observable<Completion> {
    const url = `${this.Url}/realisation/difficulty?tacheId=${idTache}&etudiantId=${idEtd}&complexite=${complexite}`;
    return this.http.post<Completion>(url, null); // Sending null body since we're using query params
  }

  getRappelByEtudiant(idEtd:number):Observable<string[]>{
    return this.http.get<string[]>((`${this.Url}/rappels/${idEtd}`))
  }
  
}
