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
        this.classes = data.map((classe: Classe) => {
          
          const nombreMatieres = classe.matieres.length;

          const nombreProfesseurs = classe.matieres.reduce((acc, matiere) => {
            if (matiere.professeurs) {
              return acc + matiere.professeurs.length; 
            }
            return acc;
          }, 0);

          const nombreEtudiants = classe.etudiants.length; 

          return {
            ...classe,
            nombreMatieres,
            nombreProfesseurs,
            nombreEtudiants,
          };
        });
      },
      (error) => {
        console.error("Erreur lors de la récupération des classes", error);
      }
    );
  }
}
