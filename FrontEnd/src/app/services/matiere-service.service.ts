import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Matiere } from '../classes/matiere';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatiereServiceService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8084';

  addMatiere(newMat:Matiere):Observable<Matiere>{
    return this.http.post<Matiere>(`${this.baseUrl}/matieres`,newMat);
  }
  
  getMatieres(): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(`${this.baseUrl}/matieres`);
}

}
