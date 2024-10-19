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
        if (!Array.isArray(data)) {
          console.error("Expected an array of classes");
          return;
        }
        this.classes = data.map((classe: Classe) => {
          console.log("Classe:", classe);

          return {
            ...classe,
            nombreMatieres: Array.isArray(classe.matieres) ? classe.matieres.length : 0,
            nombreEtudiants: Array.isArray(classe.etudiants) ? classe.etudiants.length : 0,
            nombreProfesseurs: 0 
          };
        });

        this.fetchMatiereDetails();
        
        console.log("Mapped classes:", this.classes);
      },
      (error) => {
        console.error("Error retrieving classes:", error);
      }
    );
}

fetchMatiereDetails() {
    this.classes.forEach(classe => {
    });
}


  
  
  
}
