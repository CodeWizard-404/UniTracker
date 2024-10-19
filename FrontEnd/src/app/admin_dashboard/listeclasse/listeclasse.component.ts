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
        this.classes = data.map((classe: Classe) => {
          return {
            ...classe,
            nombreMatieres: Array.isArray(classe.matiereIds) ? classe.matiereIds.length : 0,
            nombreEtudiants: Array.isArray(classe.etudiants) ? classe.etudiants.length : 0,
            nombreProfesseurs: classe.matiereIds?.reduce((acc, matiereIds) => acc + (matiereIds.professeurs?.length || 0), 0) || 0,

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
