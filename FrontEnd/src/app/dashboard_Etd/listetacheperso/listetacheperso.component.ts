import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Completion } from 'src/app/classes/completion';
import { Tache } from 'src/app/classes/tache';
import { CompletionService } from 'src/app/services/completion.service';
import { CreerTacheService } from 'src/app/services/creer-tache.service';

@Component({
  selector: 'app-listetacheperso',
  templateUrl: './listetacheperso.component.html',
  styleUrls: ['./listetacheperso.component.css']
})
export class ListetachepersoComponent implements OnInit {
  doneTasks: Tache[] = [];
  todoTasks: Tache[] = [];
  idEtudiant!: number; 
  taches: Tache[] = [];
  marked!: Completion;

  constructor(private tacheService: CreerTacheService, private route: ActivatedRoute, private CompServ: CompletionService) { }

  ngOnInit(): void {
    this.idEtudiant = Number(this.route.snapshot.paramMap.get('id')); 
    this.loadTasks();
  }

  loadTasks() {
    this.tacheService.getTasksByEtudiant(this.idEtudiant).subscribe(
      (response: Tache[]) => {
        this.taches = response;
        this.updateTaskLists(); 
      },
      (error) => {
        console.error('Erreur lors de la récupération des tâches:', error);
      }
    );
  }

  updateTaskLists() {
    this.doneTasks = this.taches.filter(tache => 
      tache.completions.some(completion => completion.marquer === true && completion.etudiant === this.idEtudiant)
    );
    
    this.todoTasks = this.taches.filter(tache => 
      !tache.completions.some(completion => completion.marquer === true && completion.etudiant === this.idEtudiant)
    );
  }

  markTaskAsCompleted(tacheId: number, etudiantId: number, isCompleted: boolean) {
    this.CompServ.markTaskAsCompleted(tacheId, etudiantId, isCompleted).subscribe(
      (updatedCompletion: Completion) => {
        console.log('Tâche marquée comme complétée:', updatedCompletion);
                this.updateTaskLists();
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la tâche:', tacheId, etudiantId, isCompleted, error);
      }
    );
  }

  chooseDiff(c: Completion,tacheId: number)  {
    const difficulty=c.complexite;
    this.CompServ.chooseDiff(tacheId,c.etudiant,difficulty).subscribe((updatedCompletion: Completion) => {
      c.complexite = updatedCompletion.complexite; 
      console.log('difficultee choisit:', updatedCompletion);
    },
    (error) => {
      console.error('Erreur lors de la mise à jour de la tâche:', error, tacheId,c.etudiant,difficulty);
    });
    
  }

deleteTask(idTache: number, idEtudiant: number): void {
  this.tacheService.deleteTaskByEtud(idTache, idEtudiant).subscribe(
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
