import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { Completion } from 'src/app/classes/completion';
import { Tache } from 'src/app/classes/tache';
import { CompletionService } from 'src/app/services/completion.service';
import { CreerTacheService } from 'src/app/services/creer-tache.service';

@Component({
  selector: 'app-listetacheperso',
  templateUrl: './listetacheperso.component.html',
  styleUrls: ['./listetacheperso.component.css']
})
export class ListetachepersoComponent implements OnInit{
  idEtudiant!: number; 
  taches: Tache[] = []
  marked!:Completion;
  constructor( private tacheService: CreerTacheService,private route: ActivatedRoute,private CompServ:CompletionService) { }

ngOnInit(): void {
  this.idEtudiant = Number(this.route.snapshot.paramMap.get('id')); 
  this.CompServ.getCompletion(this.idEtudiant,203).subscribe(
    (response: Completion) => {
      this.marked = response;
      console.log('Tâches récupérées avec succès:', this.marked);
    },
    (error) => {
      console.error('Erreur lors de la récupération des tâches:', error);
    }
  );
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

toggleCompletion(c: Completion) {
  const newStatus = !c.marquer; // Toggle the current status
  c.marquer = newStatus; // Update local state
  this.CompServ.markTaskAsCompleted(c.id_Completion, newStatus).subscribe(
    (updatedCompletion: Completion) => {
      console.log('Tâche marquée comme complétée:', updatedCompletion);
    },
    (error) => {
      console.error('Erreur lors de la mise à jour de la tâche:', error);
    }
  );
}

markTaskAsCompleted(c: Completion) {
  const isCompleted = c.marquer; // Use the current value of `marquer` to determine the state
  this.CompServ.markTaskAsCompleted(c.id_Completion, isCompleted).subscribe(
    (updatedCompletion: Completion) => {
      c.marquer = updatedCompletion.marquer; // Update the local completion object
      console.log('Tâche marquée comme complétée:', updatedCompletion);
    },
    (error) => {
      console.error('Erreur lors de la mise à jour de la tâche:', error);
    }
  );
}

chooseDiff(c: Completion) {
  const difficulty=c.complexite;
  //const isCompleted = c.marquer; // Use the current value of `marquer` to determine the state
  this.CompServ.chooseDiff(c.id_Completion,difficulty).subscribe((updatedCompletion: Completion) => {
    c.complexite = updatedCompletion.complexite; // Update the local completion object
    console.log('difficultee choisit:', updatedCompletion);
  },
  (error) => {
    console.error('Erreur lors de la mise à jour de la tâche:', error);
  });
  
}

deleteTask(idTache: number, idEtudiant: number): void {
  this.tacheService.deleteTaskByProf(idTache, idEtudiant).subscribe(
    (response: boolean) => {
      if (response) {
        console.log('Tâche supprimée avec succès.');
        this.taches = this.taches.filter(tache => tache.id_Tache !== idTache);
      
      } else {
        console.log('La tâche n\'a pas été trouvée ou n\'appartient pas au professeur.');
      }
    },
    error => {
      console.error('Erreur lors de la suppression de la tâche:', error);
    }
  );
}
}
