import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tache } from '../classes/tache';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreerTacheService {
  private baseUrl = 'http://localhost:8084';

  constructor(private http: HttpClient) {}

  addTache(newTache: Tache, idProf: number): Observable<Tache> {
    let params = new HttpParams().set('idProf', idProf.toString());
    return this.http.post<Tache>(`${this.baseUrl}/createTaskByProf`, newTache, { params });
  }
  createTacheByEtudiant(idEtudiant: number, tache: Tache): Observable<Tache> {
    const url = `${this.baseUrl}/createTaskByEtdudiant?idEtudiant=${idEtudiant}`;
    return this.http.post<Tache>(url, tache);
  }
  getTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>('http://localhost:8084/tasks');
  }
  assignTask(idTache: number, selectedEtudiants: number[]): Observable<Tache> {
    return this.http.post<Tache>(`${this.baseUrl}/task/assign?idTache=${idTache}`, selectedEtudiants);
  }
  getTasksByEtudiant(idEtudiant: number): Observable<Tache[]> {
    const url = `${this.baseUrl}/tasksByEtudiant?idEtd=${idEtudiant}`;
    return this.http.get<Tache[]>(url);
  }
  markTaskAsCompleted(idTache: number, isCompleted: boolean): Observable<Tache> {
    const url = `${this.baseUrl}/task/mark?idTache=${idTache}&isCompleted=${isCompleted}`;
    return this.http.post<Tache>(url, null); 
  }
}
