import { Component, OnInit } from '@angular/core';
import { each } from 'jquery';
import { Classe } from 'src/app/classes/classe';
import { Etudiant } from 'src/app/classes/etudiant';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-listes-etudiants',
  templateUrl: './listes-etudiants.component.html',
  styleUrls: ['./listes-etudiants.component.css']
})
export class ListesEtudiantsComponent implements OnInit{

  constructor(private etudiantService:EtudiantServiceService , private classService:ClasseServiceService){}
  etudiants: Etudiant[] = [];
  classes : Classe[]=[];
ngOnInit(): void {
  this.loadEtudiants();
}

  loadEtudiants() {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data;
    }, error => {
      console.error('Erreur lors du chargement des etudiants', error);
    });
  }


}
