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
  comment!:String;

    
    timers: { [key: number]: any } = {}; 
    times: { [key: number]: number } = {}; 

  constructor(private tacheService: CreerTacheService, private route: ActivatedRoute, private CompServ: CompletionService) { }

  ngOnInit(): void {
    this.idEtudiant = Number(this.route.snapshot.paramMap.get('id')); 
    this.loadTasks();
  }

  loadTasks() {
    this.tacheService.getTasksByEtudiant(this.idEtudiant).subscribe(
      (response: Tache[]) => {
        this.taches = response.filter(tache => !tache.tachePrincipale);  
        //this.taches = response;
        this.updateTaskLists(); 
      },
      (error) => {
        console.error('Erreur lors de la récupération des tâches:', error);
      }
    );
  }
  toggleTimer(tacheId: number) {
    if (!this.timers[tacheId]) {
      // Start the timer if it's not running
      this.startTimer(tacheId);
    } else {
      if (this.timers[tacheId].running) {
        // Pause the timer if it's running
        this.stopTimer(tacheId);
      } else {
        // Resume the timer if it's paused
        this.resumeTimer(tacheId);
      }
    }
  }

  startTimer(tacheId: number) {
    this.timers[tacheId] = { startTime: Date.now(), interval: null, running: true };
    this.times[tacheId] = 0;

    this.timers[tacheId].interval = setInterval(() => {
      this.times[tacheId] = Math.floor((Date.now() - this.timers[tacheId].startTime) / 1000);
    }, 1000);
  }

  stopTimer(tacheId: number) {
    if (this.timers[tacheId]) {
      clearInterval(this.timers[tacheId].interval);
      this.timers[tacheId].running = false; // Set running to false when timer is stopped
    }
  }

  resumeTimer(tacheId: number) {
    if (this.timers[tacheId] && !this.timers[tacheId].running) {
      // Continue from where it was paused
      this.timers[tacheId].startTime = Date.now() - this.times[tacheId] * 1000;
      this.timers[tacheId].running = true;

      this.timers[tacheId].interval = setInterval(() => {
        this.times[tacheId] = Math.floor((Date.now() - this.timers[tacheId].startTime) / 1000);
      }, 1000);
    }
  }

  formatTime(seconds: number): string {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
        this.updateTaskLists();
      
      } else {
        console.log('La tâche n\'a pas été trouvée ou n\'appartient pas au professeur.');
      }
    },
    error => {
      console.error('Erreur lors de la suppression de la tâche:', error);
    }
  );
}
addComment(idTache: number,comment:String,c:Completion){
  console.log(comment);
  this.CompServ.addComment(idTache,this.idEtudiant,comment).subscribe(
    (updatedCompletion: Completion) => {
      c.commentaires = updatedCompletion.commentaires; 
      console.log('commentaire ajoutee avec succee', updatedCompletion);
            
    },
    (error) => {
      console.error('Erreur lors de la mise à jour de la tâche:', idTache,this.idEtudiant,error);
    }
  );
}
addSubTask(idTacheP:number,comment:String){
  //t: Tache,
  //idEtudiant: number, 

}

}
