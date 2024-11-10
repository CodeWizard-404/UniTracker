import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Matiere } from '../classes/matiere';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8081';

  addMatiere(newMat:Matiere):Observable<Matiere>{
    return this.http.post<Matiere>(`${this.baseUrl}/matieres`,newMat);
  }
  
  getMatieres(): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(`${this.baseUrl}/matieres`);
}
getMatiereById(id: number): Observable<Matiere> {
  return this.http.get<Matiere>(`/matiere/${this.baseUrl}/${id}`);
}

getMatieresByIds(ids: number[]): Observable<Matiere[]> {
  const url = `${this.baseUrl}/getMatieres`;
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  return this.http.post<Matiere[]>(url, ids, { headers }).pipe(
    catchError((error) => {
      console.error('Erreur lors de la récupération des Matières:', error);
      return throwError(() => new Error('Erreur lors de la récupération des Matières.'));
    })
  );
}


}
