import { Component, AfterViewInit } from "@angular/core";
import { Classe } from "src/app/classes/classe";
import { Etudiant } from "src/app/classes/etudiant";
import { Matiere } from "src/app/classes/matiere";
import { ClasseServiceService } from "src/app/services/classe-service.service";
//import * as $ from 'jquery';
//import 'select2';
import { EtudiantServiceService } from "src/app/services/etudiant-service.service";
import { MatiereServiceService } from "src/app/services/matiere-service.service";
import { ProfServiceService } from "src/app/services/prof-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-creer-classe",
  templateUrl: "./creer-classe.component.html",
  styleUrls: ["./creer-classe.component.css"],
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
    console.log("Initialized num_Classe:", this.classe.num_Classe); // Add this line
  }
  

  loadEtudiants() {
    this.etudiantService.getEtudiants().subscribe(
      (data) => {
        this.etudiants = data;
      },
      (error) => {
        console.error("Erreur lors du chargement des étudiants", error);
      }
    );
  }

  loadMatieres() {
    this.matiereService.getMatieres().subscribe(
      (data) => {
        this.matieres = data;
      },
      (error) => {
        console.error("Erreur lors du chargement des matières", error);
      }
    );
  }

  loadProfesseurs() {
    this.professeurService.getProfesseurs().subscribe((data) => {
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
    console.log('Selected Matieres:', this.selectedMatiere);
}

  getMatiereS1(): Matiere[] {
    return this.matieres.filter((matiere) => matiere.semestre === "1");
  }

  getMatiereS2(): Matiere[] {
    return this.matieres.filter((matiere) => matiere.semestre === "2");
  }



  onSubmit() {
    console.log("Before submitting:", this.classe);
    console.log("Num Classe:", this.classe.num_Classe); 
  
    this.classe.matieres = this.selectedMatiere
      .map(matiere => matiere.id_Matiere)
      .filter((id): id is number => id !== undefined);
  
    this.classeService.createClasse(this.classe).subscribe(
      (response) => {
        console.log("Classe created successfully:", response);
      },
      (error) => {
        console.error("Erreur lors de la création de la classe", error);
      }
    );
  }
  
  

  cancel() {
    this.router.navigate(["/listeclasse"]);
  }
}
