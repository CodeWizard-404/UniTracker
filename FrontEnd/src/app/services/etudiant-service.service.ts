import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Etudiant } from '../classes/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {
  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8084';

  addEtud(newEtud:Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(`${this.baseUrl}/etd`,newEtud);
  }
  
  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>('http://localhost:8084/etd').pipe(
      catchError(err => {
          console.error('Erreur lors du chargement des étudiants', err);
          return throwError(err);
      })
  );;
  }
}
