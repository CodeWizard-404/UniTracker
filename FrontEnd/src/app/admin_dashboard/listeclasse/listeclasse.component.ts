import { Component } from "@angular/core";
import { Classe } from "src/app/classes/classe";
import { Matiere } from "src/app/classes/matiere";
import { ClasseServiceService } from "src/app/services/classe-service.service";
import { MatiereServiceService } from "src/app/services/matiere-service.service"; // Ensure this service exists

@Component({
  selector: "app-listeclasse",
  templateUrl: "./listeclasse.component.html",
  styleUrls: ["./listeclasse.component.css"],
})
export class ListeclasseComponent {
  classes: Classe[] = [];
  allMatieres: Matiere[] = [];

  constructor(
    private classeService: ClasseServiceService,
    private matiereService: MatiereServiceService // Ensure this service is imported
  ) {}

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses() {
    this.classeService.getClasses().subscribe(
      (data) => {
        console.log("Raw classes data:", data);
        if (!Array.isArray(data)) {
          console.error("Expected an array of classes");
          return;
        }
        this.classes = data.map((classe: Classe) => ({
          ...classe,
          nombreMatieres: Array.isArray(classe.matieres) ? classe.matieres.length : 0,
          nombreEtudiants: Array.isArray(classe.etudiants) ? classe.etudiants.length : 0,
          nombreProfesseurs: 0, // Initialize with 0, will calculate later
        }));

        this.fetchMatiereDetails();
      },
      (error) => {
        console.error("Error retrieving classes:", error);
      }
    );
  }

  fetchMatiereDetails() {
    this.matiereService.getMatieres().subscribe(
      (matieresData: Matiere[]) => {
        this.allMatieres = matieresData;

        this.classes.forEach((classe) => {
          const uniqueProfessors = new Set<number>();

          classe.matieres.forEach((matiereId) => {
            const matiere = this.allMatieres.find((m) => m.id_Matiere === matiereId);
            if (matiere) {
              matiere.professeurs.forEach((profId) => uniqueProfessors.add(profId));
            }
          });
          classe.nombreProfesseurs = uniqueProfessors.size;
        });

        console.log("Classes with professor counts:", this.classes);
      },
      (error) => {
        console.error("Error retrieving matieres:", error);
      }
    );
  }
}
