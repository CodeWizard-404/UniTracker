import { Component,AfterViewInit } from '@angular/core';
import { Classe } from 'src/app/classes/classe';
import { Etudiant } from 'src/app/classes/etudiant';
import { Matiere } from 'src/app/classes/matiere';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
//import * as $ from 'jquery';
//import 'select2';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';
import { MatiereServiceService } from 'src/app/services/matiere-service.service';
import { ProfServiceService } from 'src/app/services/prof-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-classe',
  templateUrl: './creer-classe.component.html',
  styleUrls: ['./creer-classe.component.css']
})
export class CreerClasseComponent {
  classe: Classe;
  etudiants: any[] = [];
  matieres: any[] = [];
  professeurs: any[] = [];

  constructor(
    private classeService: ClasseServiceService,
    private etudiantService: EtudiantServiceService,
    private matiereService: MatiereServiceService,
    private professeurService: ProfServiceService,
    private router: Router
  ) {
      this.classe = new Classe(); 
  }

  ngOnInit(): void {
    this.loadEtudiants();
    this.loadMatieres();
    this.loadProfesseurs();
  }

  loadEtudiants() {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data; 
    }, error => {
      console.error('Erreur lors du chargement des étudiants', error);
    });
  }

  loadMatieres() {
    this.matiereService.getMatieres().subscribe(data => {
      this.matieres = data;
    });
  }

  loadProfesseurs() {
    this.professeurService.getProfesseurs().subscribe(data => {
      this.professeurs = data;
    });
  }

  selectedMatiere: Matiere[] = [];

  toggleSelectionMatiere(matiere: Matiere) {
    const index = this.selectedMatiere.indexOf(matiere);
    if (index === -1) {
      this.selectedMatiere.push(matiere);
    } else {
      this.selectedMatiere.splice(index, 1);
    }
  }

  onSubmit() {
    console.log('ressss', this.classe);
    this.classeService.createClasse(this.classe).subscribe(response => {
      console.log('Classe créée avec succès', response);
      this.router.navigate(['/listeclasse']);
    }, error => {
      console.error('Erreur lors de la création de la classe', error);
    });
  }

  // ngAfterViewInit(): void {
  //   // Initialiser Select2 après le rendu du DOM
  //   $('.js-example-basic-multiple').select2();
  // }
   cancel() {
    this.router.navigate(['/listeclasse']); 
   }

}