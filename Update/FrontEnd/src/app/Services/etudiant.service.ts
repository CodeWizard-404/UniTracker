import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Etudiant } from '../Classes/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8081';

  addEtud(newEtud:Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(`${this.baseUrl}/etd`,newEtud);
  }
  
  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>('http://localhost:8081/etd').pipe(
      catchError(err => {
          console.error('Erreur lors du chargement des étudiants', err);
          return throwError(err);
      })
  );;
  }

  getEtudiantsByIdClasse(classeId: number): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.baseUrl}/Etudiants/byClasse/${classeId}`);
  }
}
