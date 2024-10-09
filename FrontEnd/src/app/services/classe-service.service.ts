import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classe } from '../classes/classe';
import { Etudiant } from '../classes/etudiant';
import { Matiere } from '../classes/matiere';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {

  private Url = 'http://localhost:8084/classes'; 

  constructor(private http: HttpClient) {}


  createClasse(classe: Classe): Observable<Classe> {
    return this.http.post<Classe>(this.Url, classe);
  }

  getClasses(): Observable<any[]> {
    return this.http.get<any[]>(this.Url);
  }

}


 
