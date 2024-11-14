import { Component, OnInit } from "@angular/core";
import { CreerTacheComponent } from "../creer-tache/creer-tache.component";
import { Tache } from "src/app/classes/tache";
import { CreerTacheService } from "src/app/services/creer-tache.service";
import { Etudiant } from "src/app/classes/etudiant";
import { EtudiantServiceService } from "src/app/services/etudiant-service.service";
import { ActivatedRoute, Data } from "@angular/router";
import { Prof } from "src/app/classes/prof";
import { ProfServiceService } from "src/app/services/prof-service.service";
import { ClasseServiceService } from "src/app/services/classe-service.service";
import { Classe } from "src/app/classes/classe";
import { error } from "jquery";
import { CompletionService } from "src/app/services/completion.service";
import { Completion } from "src/app/classes/completion";

@Component({
  selector: "app-listetaches",
  templateUrl: "./listetaches.component.html",
  styleUrls: ["./listetaches.component.css"],
})
export class ListetachesComponent implements OnInit {
  taches: Tache[] = [];
  prof!: Prof;
  etudiants: Etudiant[] = [];
  selectedTacheId: number | null = null; // Pour stocker l'ID de la tâche sélectionnée
  showEtudiants: boolean = false; // Pour contrôler l'affichage de la liste des étudiants
  selectedEtudiants: number[] = []; // Tableau pour stocker les IDs des étudiants sélectionnés
  idProf!: number;
  tabClasses!: Classe[];
  taskCompletions:Completion[]=[];
  progress:number=0;

  constructor(
    private tacheService: CreerTacheService,
    private etudiantService: EtudiantServiceService,
    private profService: ProfServiceService,
    private route: ActivatedRoute,
    private classeService: ClasseServiceService,
    private compServ:CompletionService

  ) {}

  ngOnInit(): void {
    this.idProf = Number(this.route.snapshot.paramMap.get("id"));
    if (!this.idProf) {
      console.error("Invalid or missing Professor ID");
      return;
    }
    this.loadTaches();

    this.loadEtudiants();

    this.loadClasses();
  }

  loadTaches() {
    this.tacheService.getTasksByProf(this.idProf).subscribe(
      (data) => {
        this.taches = data;
        console.log("Loaded tasks:", this.taches); // Debugging step
      },
      (error) => {
        console.error("Erreur lors du chargement des taches", error);
      }
    );
  }

  loadClasses() {
    if (this.idProf == null) {
      console.error("idProf is not defined");
      return;
    }
    this.classeService.getClassesByIdProf(this.idProf).subscribe({
      next: (data) => {
        this.tabClasses = data;
        console.log("Classes retrieved:", data);
      },
      error: (error) => {
        console.error("Error retrieving classes:", error);
      },
    });
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

  assignTache(tacheId: number) {
    this.selectedTacheId = tacheId;
    console.log("Assigned Tache ID:", this.selectedTacheId); // Debugging step
  }

  closeEtudiantList() {
    this.showEtudiants = false;
    this.selectedTacheId = null;
    this.selectedEtudiants = [];
  }
  assignSelectedEtudiants() {
    const selectedEtudiants = this.selectedEtudiants;

    // Check if the selected students array and task ID are valid
    if (selectedEtudiants.length === 0) {
      console.warn("No students selected.");
      this.Submitederror();

    }
    if (!this.selectedTacheId) {
      console.warn("No task selected.");
      this.Submitederror();

    }

    if (selectedEtudiants.length > 0 && this.selectedTacheId) {
      this.tacheService
        .assignTask(this.selectedTacheId, selectedEtudiants)
        .subscribe(
          (response) => {
            console.log(
              "Tâche assignée avec succès:",
              response,
              selectedEtudiants
            );
            this.Submited();
            setTimeout(() => {
              this.closeEtudiantList();
            }, 1200);
          },
          (error) => {
            this.Submitederror();
            console.error("Erreur lors de l'attribution de la tâche:", error);
          }
        );
    }
    
  }

  alertVisible1 = false;
  Submited() {
    this.alertVisible1 = true;
    setTimeout(() => {
      this.alertVisible1 = false;
    }, 1000);
  }

  alertVisible2 = false;
  Submitederror() {
    this.alertVisible2 = true;
    setTimeout(() => {
      this.alertVisible2 = false;
    }, 1000);
  }

  onEtudiantChange(event: any) {
    const idEtudiant = +event.target.value;
    if (event.target.checked) {
      this.selectedEtudiants.push(idEtudiant);
    } else {
      this.selectedEtudiants = this.selectedEtudiants.filter(
        (id) => id !== idEtudiant
      );
    }
    console.log("Selected students:", this.selectedEtudiants);
  }

  deleteTask(idTache: number, idProf: number): void {
    this.tacheService.deleteTaskByProf(idTache, idProf).subscribe(
      (response: boolean) => {
        if (response) {
          console.log("Tâche supprimée avec succès.");
          this.taches = this.taches.filter(
            (tache) => tache.id_Tache !== idTache
          );
        } else {
          console.log(
            "La tâche n'a pas été trouvée ou n'appartient pas au professeur."
          );
        }
      },
      (error) => {
        console.error("Erreur lors de la suppression de la tâche:", error);
      }
    );
  }

  onClasseChange(classe: Classe, event: any) {
    if (event.target.checked) {
      this.etudiantService.getEtudiantsByIdClasse(classe.id_Classe!).subscribe({
        next: (etudiants) => {
          etudiants.forEach((etudiant) => {
            if (!this.selectedEtudiants.includes(etudiant.id_Etudiant)) {
              this.selectedEtudiants.push(etudiant.id_Etudiant);
            }
          });
        },
        error: (error) => {
          console.error(
            "Erreur lors du chargement des étudiants pour la classe:",
            error
          );
        },
      });
    } else {
      this.etudiantService.getEtudiantsByIdClasse(classe.id_Classe!).subscribe({
        next: (etudiants) => {
          etudiants.forEach((etudiant) => {
            this.selectedEtudiants = this.selectedEtudiants.filter(
              (id) => id !== etudiant.id_Etudiant
            );
          });
        },
        error: (error) => {
          console.error(
            "Erreur lors du chargement des étudiants pour la classe:",
            error
          );
        },
      });
    }
  }


  getTaskCompltions(tacheId:number){
    this.compServ.getTaskCompltions(tacheId).subscribe(
      (data) => {
        this.taskCompletions = data;
        this.taskCompletions.forEach(completion => {
          // Check if marquer is true and increment the progress if it is
          if (completion.marquer) {
              this.progress += 1;
          }
      });
  
        console.log("Loaded completions:", this.taskCompletions); 
      },
      (error) => {
        console.error("Erreur lors du chargement des taches", error);
      }
    );
  }


  selectedTask: any;

  openTaskDetails(tache: any) {
    console.log("Selected Task:", tache);
    this.selectedTask = tache;
    this.assignTache(tache.id_Tache);
    this.getTaskCompltions(tache.id_Tache) ;
  }

  closeTaskDetails() {
    this.selectedTask = null;
    this.progress=0;
  }

  isTaskOverdue(dateLimite: string | Date | undefined): boolean {
    if (!dateLimite) return false;
    
    const taskDate = new Date(dateLimite);
    const currentDate = new Date();
  
    return taskDate < currentDate;
  }
  
  
  
}
