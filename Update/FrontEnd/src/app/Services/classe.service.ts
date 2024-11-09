
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classe } from '../Classes/classe';


@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private Url = 'http://localhost:8081/classes'; 
  private Url2 = 'http://localhost:8081'; 

  constructor(private http: HttpClient) {}


  createClasse(classe: Classe): Observable<Classe> {
    console.log("Sending Classe:", classe); 
    return this.http.post<Classe>(this.Url, classe);
  }

  getClasses(): Observable<Classe[]> {
    return this.http.get<Classe[]>(this.Url);
  }


  getClassesByIds(classIds: number[]): Observable<Classe[]> {
    return this.http.post<Classe[]>(`${this.Url}/classes`, { ids: classIds });
  }
  getClassesByIdProf(idProf: number): Observable<Classe[]> {
    console.log("Making HTTP call to:", `${this.Url2}/${idProf}/classes`);
    return this.http.get<Classe[]>(`${this.Url2}/${idProf}/classes`);
  }
  
}


 