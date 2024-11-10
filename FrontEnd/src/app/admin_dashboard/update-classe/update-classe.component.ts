import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from 'src/app/classes/classe';
import { Matiere } from 'src/app/classes/matiere';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { MatiereServiceService } from 'src/app/services/matiere-service.service';

@Component({
  selector: 'app-update-classe',
  templateUrl: './update-classe.component.html',
  styleUrls: ['./update-classe.component.css']
})
export class UpdateClasseComponent implements OnInit {
  classe: Classe = new Classe();
  matieresS1: Matiere[] = [];
  matieresS2: Matiere[] = [];

  constructor(
    private classeService: ClasseServiceService,
    private matiereService: MatiereServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
 

  ngOnInit(): void {
    const classeId = Number(this.route.snapshot.paramMap.get('id')); // Récupérer l'ID depuis l'URL
  
    // Récupérer la classe par son ID
    this.classeService.getClasseById(classeId).subscribe((classe) => {
      this.classe = classe;
    });


    this.classeService.getIdsMatieresByClasseId(classeId).subscribe((matieresIds) => {
      console.log("Matières IDs:", matieresIds);
      // Récupérer les matières complètes en utilisant les IDs
      this.matiereService.getMatieresByIds(matieresIds).subscribe((matieres) => {
        console.log("Matières Responseeeeeeeeee:", matieres); // Verify the response structure and content
        this.matieresS1 = matieres.filter(m => m.semestre === '1');
        this.matieresS2 = matieres.filter(m => m.semestre === '2');
        console.log("matieres1111111111", this.matieresS1);
      });
    });
  }


  onSubmit(): void {
    if (!this.classe.id_Classe) {
      console.error('ID de la classe manquant');
      return;
    }
    this.classeService.updateClasse(this.classe.id_Classe, this.classe).subscribe(
      (updatedClasse) => {
        console.log('Classe mise à jour', updatedClasse);
        this.router.navigate(['/listeclasse']); 
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la classe', error);
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/listeclasse']); // Adjust the route to your class list path
  }
  


}