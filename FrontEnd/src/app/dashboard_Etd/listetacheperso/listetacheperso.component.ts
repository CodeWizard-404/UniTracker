import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tache } from 'src/app/classes/tache';
import { CreerTacheService } from 'src/app/services/creer-tache.service';

@Component({
  selector: 'app-listetacheperso',
  templateUrl: './listetacheperso.component.html',
  styleUrls: ['./listetacheperso.component.css']
})
export class ListetachepersoComponent implements OnInit{
  idEtudiant!: number; 
  taches: Tache[] = []
  constructor( private tacheService: CreerTacheService,private route: ActivatedRoute) { }

ngOnInit(): void {
  this.idEtudiant = Number(this.route.snapshot.paramMap.get('id')); 
  console.log(this.idEtudiant);
  this.loadTasks();
}
loadTasks() {
  this.tacheService.getTasksByEtudiant(this.idEtudiant)
    .subscribe(
      (response: Tache[]) => {
        this.taches = response;
        console.log('Tâches récupérées avec succès:', this.taches);
      },
      (error) => {
        console.error('Erreur lors de la récupération des tâches:', error);
      }
    );
}
markTaskAsCompleted(tache: Tache) {
  const isCompleted = !tache.marquer; 
  this.tacheService.markTaskAsCompleted(tache.id_Tache, isCompleted)
    .subscribe(
      (updatedTache: Tache) => {
        const index = this.taches.findIndex(t => t.id_Tache === updatedTache.id_Tache);
        if (index !== -1) {
          this.taches[index] = updatedTache; 
        }
        console.log('Tâche marquée comme complétée:', updatedTache);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la tâche:', error);
      }
    );
}
}
