import { Component, OnInit  } from "@angular/core";
import { Matiere } from "src/app/classes/matiere";
import { MatiereServiceService } from "src/app/services/matiere-service.service";

@Component({
  selector: "app-listematiere",
  templateUrl: "./listematiere.component.html",
  styleUrls: ["./listematiere.component.css"],
})
export class ListematiereComponent implements OnInit{
  matieres: Matiere[] = [];

  constructor(private matiereService: MatiereServiceService) {}

  ngOnInit(): void {
    this.loadMatieres();
  }

  getClassesNames(matiere: Matiere): string {
    if (matiere.classes && matiere.classes.length > 0) {
      const uniqueClasses = new Map<string, Set<string>>();
  
      matiere.classes.forEach(c => {
        if (!uniqueClasses.has(c.nom_Classe)) {
          uniqueClasses.set(c.nom_Classe, new Set<string>());
        }
        uniqueClasses.get(c.nom_Classe)?.add(c.num_Classe.toString());
      });
  
      const result: string[] = [];
      uniqueClasses.forEach((numbers, name) => {
        result.push(`${name}: ${Array.from(numbers).join(",")}`);
      });
  
      return result.join("/ ");
    }
    return "Aucune classe";
  }
  
  getClassesYear(matiere: Matiere): string[] {
    if (matiere.classes && matiere.classes.length > 0) {
      const uniqueYears = new Set<number>();
  
      matiere.classes.forEach(c => {
        uniqueYears.add(c.annee_Classe); 
      });
  
      const yearsWithSuffix: string[] = Array.from(uniqueYears).map(year => {
        switch (year) {
          case 1:
            return `${year}er`;
          default:
            return `${year}eme`; 
        }
      });
  
      return yearsWithSuffix;
    }
    return [];
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
}

