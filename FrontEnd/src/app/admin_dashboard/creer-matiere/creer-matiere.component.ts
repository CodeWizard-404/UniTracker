import { Component } from '@angular/core';
import { Classe } from 'src/app/classes/classe';
import { Etudiant } from 'src/app/classes/etudiant';
import { Prof } from 'src/app/classes/prof';
import { MatiereServiceService } from 'src/app/services/matiere-service.service';
//import * as $ from 'jquery';
//import 'select2';
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
//   matiere: Matiere = new Matiere();
//   professeurs: Prof[] = [];
//   etudiants: Etudiant[] = [];
//   classes: Classe[] = [];

//   constructor(private matiereService: MatiereServiceService, private router: Router,private etudiantService :EtudiantServiceService
//     ,private classeService:ClasseServiceService,
//     private profService: ProfServiceService) {
  
   
   
    
//   }

//   ngOnInit(): void {
//     this.loadProfesseurs();
//     this.loadEtudiants();
//     this.loadClasses();
//   }

//   loadProfesseurs() {
//     this.profService.getProfesseurs().subscribe(data => {
//       this.professeurs = data;
//     });
//   }

//   loadEtudiants() {
//     this.etudiantService.getEtudiants().subscribe(data => {
//       this.etudiants = data; 
//     }, error => {
//       console.error('Erreur lors du chargement des étudiants', error);
//     });
//   }

//   loadClasses() {
//     this.classeService.getClasses().subscribe((data) => {
//       this.classes = data;
//     });
//   }

//   onSubmit() {
    
//     this.matiereService.addMatiere(this.matiere).subscribe((response) => {
//       console.log('Matière ajoutée:', response);
//       this.router.navigate(['/listmatiere']); 
//     }, error => {
//       console.error('Erreur lors de la création de la classe', error);
//     });

//   }

//   // ngAfterViewInit(): void {
   
//   //   $('.js-example-basic-multiple').select2();
//   // }
//   cancel() {
//     this.router.navigate(['/listmatiere']); 
//   }
// }

matiere: Matiere = new Matiere();
  professeurs: Prof[] = [];
  etudiants: Etudiant[] = [];
  classes: Classe[] = [];

  constructor(private matiereService: MatiereServiceService, private router: Router,private etudiantService :EtudiantServiceService
    ,private classeService:ClasseServiceService,
    private profService: ProfServiceService) {
  
   
   
    
  }

  ngOnInit(): void {
    this.loadProfesseurs();
    this.loadEtudiants();
    this.loadClasses();
  }

  loadProfesseurs() {
    this.profService.getProfesseurs().subscribe(data => {
      this.professeurs = data.map(prof => {
        return { ...prof, selected: false }; // Ajoute la propriété selected avec valeur false
      });
    });
  }
  
  loadClasses() {
    this.classeService.getClasses().subscribe(data => {
      this.classes = data.map(classe => {
        return { ...classe, selected: false }; // Ajoute la propriété selected avec valeur false
      });
    });
  }

  loadEtudiants() {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data; 
    }, error => {
      console.error('Erreur lors du chargement des étudiants', error);
    });
  }



  // onSubmit() {
    
  //   this.matiereService.addMatiere(this.matiere).subscribe((response) => {
  //     console.log('Matière ajoutée:', response);
  //     this.router.navigate(['/listmatiere']); 
  //   }, error => {
  //     console.error('Erreur lors de la création de la classe', error);
  //   });

  // }
  selectedProfesseurs: Prof[] = [];
  selectedClasses: Classe[] = [];
  
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
    this.matiere.professeurs = this.selectedProfesseurs;
    this.matiere.classes = this.selectedClasses;
  
    this.matiereService.addMatiere(this.matiere).subscribe((response) => {
      console.log('Matière ajoutée:', response);
      this.router.navigate(['/listmatiere']);
    }, error => {
      console.error('Erreur lors de la création de la matière', error);
    });
  }
  

  

//   // ngAfterViewInit(): void {
   
//   //   $('.js-example-basic-multiple').select2();
//   // }
  cancel() {
    this.router.navigate(['/listmatiere']); 
  }
}