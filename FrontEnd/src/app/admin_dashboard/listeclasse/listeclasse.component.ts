import { Component } from "@angular/core";
import { Classe } from "src/app/classes/classe";
import { Matiere } from "src/app/classes/matiere";
import { ClasseServiceService } from "src/app/services/classe-service.service";

@Component({
  selector: "app-listeclasse",
  templateUrl: "./listeclasse.component.html",
  styleUrls: ["./listeclasse.component.css"],
})
export class ListeclasseComponent {
  classes: Classe[] = [];

  constructor(private classeService: ClasseServiceService) {}

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses() {
    this.classeService.getClasses().subscribe(
      (data) => {
        console.log("Raw classes data:", data); 
        // Check if data is an array
        if (!Array.isArray(data)) {
          console.error("Expected an array of classes");
          return;
        }
        this.classes = data.map((classe: Classe) => {
          console.log("Classe:", classe); // Log each classe for further inspection
          return {
            ...classe,
            nombreMatieres: Array.isArray(classe.matieres) ? classe.matieres.length : 0,
            nombreEtudiants: Array.isArray(classe.etudiants) ? classe.etudiants.length : 0,
            nombreProfesseurs: classe.matieres?.reduce((acc, matiere) => {
              console.log('Matiere:', matiere);
              console.log('Professeurs:', matiere.professeurs);
 
              return acc + (matiere.professeurs?.length || 0);
            }, 0) || 0,
          };
        });
        console.log("Mapped classes:", this.classes);
      },
      (error) => {
        console.error("Error retrieving classes:", error);
      }
    );
  }
  
  
  
  
}
