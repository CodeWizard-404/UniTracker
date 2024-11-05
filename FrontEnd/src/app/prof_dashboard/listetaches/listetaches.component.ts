import { Component, OnInit } from '@angular/core';
import { CreerTacheComponent } from '../creer-tache/creer-tache.component';
import { Tache } from 'src/app/classes/tache';
import { CreerTacheService } from 'src/app/services/creer-tache.service';
import { Etudiant } from 'src/app/classes/etudiant';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';
import { ActivatedRoute } from '@angular/router';
import { Prof } from 'src/app/classes/prof';
import { ProfServiceService } from 'src/app/services/prof-service.service';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { Classe } from 'src/app/classes/classe';

@Component({
  selector: 'app-listetaches',
  templateUrl: './listetaches.component.html',
  styleUrls: ['./listetaches.component.css']
})
export class ListetachesComponent implements OnInit{
  taches: Tache[] = [];
  prof!:Prof;
  etudiants: Etudiant[] = [];
  selectedTacheId: number | null = null; // Pour stocker l'ID de la tâche sélectionnée
  showEtudiants: boolean = false; // Pour contrôler l'affichage de la liste des étudiants
  selectedEtudiants: number[] = []; // Tableau pour stocker les IDs des étudiants sélectionnés
  idProf!:number;
  tabClasses!:Classe[];
  
  constructor(private tacheService: CreerTacheService, private etudiantService: EtudiantServiceService,private profService: ProfServiceService,
    private route:ActivatedRoute, private classeService: ClasseServiceService) {}

  ngOnInit(): void {
    
    this.idProf = Number(this.route.snapshot.paramMap.get('id'));

    this.loadTaches();

    this.loadEtudiants();

    // this.profService.getProf(this.idProf).subscribe(
    //   data => {
    //     this.prof = data;
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
    console.log("tttttttttttttttttt2")
    this.loadClasses()
    
  }

  loadTaches() {
    this.tacheService.getTasksByProf(this.idProf).subscribe(data => {
      this.taches = data;
    }, error => {
      console.error('Erreur lors du chargement des taches', error);
    });
  }
  loadClasses(){
    if (this.idProf == null) {
      console.error("idProf is not defined");
      return;
    }
    this.classeService.getClassesByIdProf(this.idProf).subscribe({
      next: (data) => {
        console.log("tttttttttttttttttt")
        this.tabClasses = data;
        console.log("Classes retrieved:", data);
      },
      error: (error) => {
        console.error("Error retrieving classes:", error);
      }
    });
  }

  loadEtudiants() {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data;
    }, error => {
      console.error('Erreur lors du chargement des étudiants', error);
    });
  }

  assignTache(tacheId: number) {

    this.selectedTacheId = tacheId;
    this.showEtudiants = true;
    setTimeout(() => {
      const element = document.getElementById('assignEtudiantsSection');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Défilement en douceur
      }
    }, 0); 
    }

  closeEtudiantList() {
    this.showEtudiants = false; // Ferme la liste des étudiants
    this.selectedTacheId = null;
    this.selectedEtudiants = []; // Réinitialise l'ID de la tâche sélectionnée
  }
  assignSelectedEtudiants() {
    const selectedEtudiants = this.selectedEtudiants;
    //const selectedEtudiants = this.etudiants.filter(etudiant => this.selectedEtudiants).map(etudiant => etudiant.id_Etudiant);
    if (selectedEtudiants.length > 0 && this.selectedTacheId) {
      this.tacheService.assignTask(this.selectedTacheId, selectedEtudiants).subscribe(
        response => {
          console.log('Tâche assignée avec succès:', response,selectedEtudiants);
          this.Submited();
          setTimeout(() => { this.closeEtudiantList(); }, 1000);
        },
        error => {
          console.error('Erreur lors de l\'attribution de la tâche:', error);
        }
      );
    }
  }

  alertVisible1 = false;
  Submited() {
    this.alertVisible1 = true;
    setTimeout(() => { this.alertVisible1 = false;}, 2000);
  }

  onEtudiantChange(event: any) {
    const idEtudiant = +event.target.value; // Convertir la valeur en nombre
    if (event.target.checked) {
      // Ajouter à la liste des étudiants sélectionnés
      this.selectedEtudiants.push(idEtudiant);
    } else {
      // Retirer de la liste des étudiants sélectionnés
      this.selectedEtudiants = this.selectedEtudiants.filter(id => id !== idEtudiant);
    }
  }

  deleteTask(idTache: number, idProf: number): void {
    this.tacheService.deleteTaskByProf(idTache, idProf).subscribe(
      (response: boolean) => {
        if (response) {
          console.log('Tâche supprimée avec succès.');
          this.taches = this.taches.filter(tache => tache.id_Tache !== idTache);
        
        } else {
          console.log('La tâche n\'a pas été trouvée ou n\'appartient pas au professeur.');
        }
      },
      error => {
        console.error('Erreur lors de la suppression de la tâche:', error);
      }
    );
  }

 onClasseChange(classe: Classe, event: any) {
  if (event.target.checked) {
    this.etudiantService.getEtudiantsByIdClasse(classe.id_Classe!).subscribe({
      next: (etudiants) => {
        etudiants.forEach(etudiant => {
          if (!this.selectedEtudiants.includes(etudiant.id_Etudiant)) {
            this.selectedEtudiants.push(etudiant.id_Etudiant); 
          }
        });
      },
      error: (error) => {
        console.error("Erreur lors du chargement des étudiants pour la classe:", error);
      }
    });
  } else {
    this.etudiantService.getEtudiantsByIdClasse(classe.id_Classe!).subscribe({
      next: (etudiants) => {
        etudiants.forEach(etudiant => {
          this.selectedEtudiants = this.selectedEtudiants.filter(id => id !== etudiant.id_Etudiant);
        });
      },
      error: (error) => {
        console.error("Erreur lors du chargement des étudiants pour la classe:", error);
      }
    });
  }
}

  // getClassesNames(prof: Prof): string[] {
  //   if (prof.lesMatieres && prof.lesMatieres.length > 0) {
  //     const uniqueClasses = new Set<string>();

  //     prof.lesMatieres.forEach(m => {
  //       if (m.classes && m.classes.length > 0) {
  //         m.classes.forEach(cls => {
  //           uniqueClasses.add(cls.nom_Classe); 
  //         });
  //       }
  //     });

  //     return Array.from(uniqueClasses);
  //   }
  //   return [];
  // }


}


