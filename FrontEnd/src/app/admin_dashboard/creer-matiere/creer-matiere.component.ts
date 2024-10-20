import { Component } from '@angular/core';
import { Classe } from 'src/app/classes/classe';
import { Etudiant } from 'src/app/classes/etudiant';
import { Prof } from 'src/app/classes/prof';
import { MatiereServiceService } from 'src/app/services/matiere-service.service';
import { Router } from '@angular/router';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { ProfServiceService } from 'src/app/services/prof-service.service';
import { Matiere } from 'src/app/classes/matiere';


@Component({
  selector: 'app-creer-matiere',
  templateUrl: './creer-matiere.component.html',
  styleUrls: ['./creer-matiere.component.css']
})
export class CreerMatiereComponent {
  matiere: Matiere = new Matiere();
  professeurs: Prof[] = [];
  etudiants: Etudiant[] = [];
  classes: Classe[] = [];  // Keep this as Classe[]
  selectedClassYear: number = 0; 
  selectedProfesseurs: Prof[] = [];
  selectedClasses: Classe[] = []; // This holds selected class objects

  constructor(
    private matiereService: MatiereServiceService, 
    private router: Router,
    private etudiantService: EtudiantServiceService,
    private classeService: ClasseServiceService,
    private profService: ProfServiceService
  ) { }

  ngOnInit(): void {
    this.loadProfesseurs();
    this.loadEtudiants();
    this.loadClasses();
  }

  loadProfesseurs() {
    this.profService.getProfesseurs().subscribe(data => {
      this.professeurs = data.map(prof => ({ ...prof, selected: false }));
    });
  }

  loadClasses() {
    this.classeService.getClasses().subscribe(data => {
      this.classes = data; // Now this.classes is correctly an array of Classe objects
    }, error => {
      console.error('Erreur lors du chargement des classes', error);
    });
  }

  loadEtudiants() {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data; 
    }, error => {
      console.error('Erreur lors du chargement des étudiants', error);
    });
  }

  toggleSelectionProf(prof: Prof) {
    const index = this.selectedProfesseurs.indexOf(prof);
    if (index === -1) {
      this.selectedProfesseurs.push(prof);
    } else {
      this.selectedProfesseurs.splice(index, 1);
    }
  }

  toggleSelectionClasse(classe: Classe) {
    const index = this.selectedClasses.indexOf(classe);
    if (index === -1) {
      this.selectedClasses.push(classe);
    } else {
      this.selectedClasses.splice(index, 1);
    }
  }

  onSubmit() {
    console.log('Matiere object before modification:', this.matiere);

    // Map selected classes to their objects
    this.matiere.classes = this.selectedClasses; // Use selected classes directly

    console.log('Selected class year:', this.selectedClassYear);
    
    // Map selected professors to their IDs
    this.matiere.professeurs = this.selectedProfesseurs.map(prof => prof.id_Professeur);

    console.log('Matiere object before sending to server:', this.matiere);

    this.matiereService.addMatiere(this.matiere).subscribe((response) => {
      console.log('Matière ajoutée:', response);
      this.router.navigate(['/listmatiere']);
    }, error => {
      console.error('Erreur lors de la création de la matière', error);
    });
}



  cancel() {
    this.router.navigate(['/listmatiere']); 
  }
}
