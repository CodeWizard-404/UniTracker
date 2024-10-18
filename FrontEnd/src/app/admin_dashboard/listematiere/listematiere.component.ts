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
      return matiere.classes
        .map(c => `${c.nom_Classe}${c.annee_Classe}${c.num_Classe}`)
        .join(", ");
    }
    return "Aucune classe";
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

