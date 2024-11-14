import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  tacheForm!: FormGroup;
  doneTasks: Tache[] = [];
  todoTasks: Tache[] = [];
  inProgressTasks: Tache[] = [];
  idEtudiant!: number; 
  taches: Tache[] = [];
  marked!: Completion;
  comment!:String;
  selectedTacheId: number | null = null;
  totalStudentSubtasks: number = 0;

  tempsEcoule: number = 0;
  running: boolean = false;

    timers: { [key: number]: any } = {}; 
    times: { [key: number]: number } = {}; 

  constructor(private cd: ChangeDetectorRef,private fb: FormBuilder,private tacheService: CreerTacheService, private route: ActivatedRoute, private CompServ: CompletionService) { }

  ngOnInit(): void {
    this.tacheForm = this.fb.group({
      titre: ['', Validators.required]
    });
    this.idEtudiant = Number(this.route.snapshot.paramMap.get('id')); 
    this.loadTasks();
    this.calculateStudentProgression();
  
    // Récupérer les temps sauvegardés dans localStorage
    this.taches.forEach(tache => {
      const savedTime = localStorage.getItem(`timer-${tache.id_Tache}`);
      if (savedTime) {
        this.times[tache.id_Tache] = parseInt(savedTime, 10);
      }
    });
  }
  calculateStudentProgression() {
    // Filtrer les sous-tâches pour cet étudiant uniquement
    const studentSubtasks = this.selectedTask.sousTaches.filter((subtask: any) =>
      subtask.completions.some((completion: any) => completion.etudiant === this.idEtudiant)
    );

    // Calculer le total de sous-tâches pour cet étudiant
    this.totalStudentSubtasks = studentSubtasks.length;}

  loadTasks() {
    this.tacheService.getTasksByEtudiant(this.idEtudiant).subscribe(
      (response: Tache[]) => {
        this.taches = response.filter(tache => !tache.tachePrincipale);  
        this.updateTaskLists(); 
      },
      (error) => {
        console.error('Erreur lors de la récupération des tâches:', error);
      }
    );
  }
  toggleTimer(tacheId: number): void {
    if (this.timers[tacheId] && this.timers[tacheId].running) {
      // Si le timer est déjà en cours, arrêtez-le et enregistrez l'état dans localStorage
      clearInterval(this.timers[tacheId].interval);
      this.timers[tacheId].running = false;
  
      // Sauvegarder le temps écoulé dans localStorage
      localStorage.setItem(`timer-${tacheId}`, this.times[tacheId].toString());
    } else {
      // Si le timer n'est pas en cours, démarrez-le et récupérez l'état depuis localStorage
      const savedTime = localStorage.getItem(`timer-${tacheId}`);
      this.timers[tacheId] = { running: true, elapsedTime: savedTime ? parseInt(savedTime, 10) : this.times[tacheId] || 0 };
  
      this.timers[tacheId].interval = setInterval(() => {
        this.times[tacheId] = this.timers[tacheId].elapsedTime++;
        this.cd.detectChanges();
      }, 1000);
    }
  }
  
  
  startChronometre(tacheId: number) {
    this.CompServ.startChronometre(tacheId, this.idEtudiant).subscribe(
      () => {
        this.timers[tacheId] = { startTime: Date.now(), interval: null, running: true };
        this.times[tacheId] = 0;

        this.timers[tacheId].interval = setInterval(() => {
          this.times[tacheId] = Math.floor((Date.now() - this.timers[tacheId].startTime) / 1000);
        }, 1000);
      },
      (error) => {
        console.error('Erreur lors du démarrage du chronomètre:', error);
      }
    );
  }

  pauseChronometre(tacheId: number) {
    if (this.timers[tacheId]) {
      clearInterval(this.timers[tacheId].interval);
      this.timers[tacheId].running = false;

      const tempsEcoule = this.times[tacheId];
      this.CompServ.pauseChronometre(tacheId, this.idEtudiant, tempsEcoule).subscribe(
        () => {
          console.log('Chronomètre en pause');
        },
        (error) => {
          console.error('Erreur lors de la mise en pause du chronomètre:', error);
        }
      );
    }
  }
  resumeTimer(tacheId: number) {
    if (this.timers[tacheId] && !this.timers[tacheId].running) {
      this.timers[tacheId].startTime = Date.now() - this.times[tacheId] * 1000;
      this.timers[tacheId].running = true;

      this.timers[tacheId].interval = setInterval(() => {
        this.times[tacheId] = Math.floor((Date.now() - this.timers[tacheId].startTime) / 1000);
      }, 1000);
    }
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600); // 3600 secondes dans une heure
    const minutes = Math.floor((seconds % 3600) / 60); // Reste de minutes après avoir extrait les heures
    const remainingSeconds = seconds % 60; // Reste des secondes après avoir extrait les minutes
    
    // Formatage de l'heure, des minutes et des secondes
    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(remainingSeconds)}`;
  }
  
  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
  
  updateTaskLists() {
    this.doneTasks = this.taches.filter(tache => 
      tache.completions.some(completion => completion.marquer === true && completion.etudiant === this.idEtudiant)
    );
    
    this.todoTasks = this.taches.filter(tache => 
      tache.sousTaches.every(subtask => 
        !subtask.completions.some(completion => completion.marquer === true && completion.etudiant === this.idEtudiant)
      )
    );

    this.inProgressTasks = this.taches.filter(tache => 
      tache.sousTaches.some(subtask => 
        subtask.completions.some(completion => completion.marquer === true && completion.etudiant === this.idEtudiant)
      ) &&
      !tache.sousTaches.every(subtask => 
        subtask.completions.some(completion => completion.marquer === true && completion.etudiant === this.idEtudiant)
      )
    );
  }

  markTaskAsCompleted(tacheId: number, etudiantId: number, isCompleted: boolean) {

    this.CompServ.markTaskAsCompleted(tacheId, etudiantId, isCompleted).subscribe(
      (updatedCompletion: Completion) => {
        const task = this.taches.find(t => t.id_Tache === tacheId);
        if (task) {
          // Update the main task completion (marquer and progression)
          const completion = task.completions.find(c => c.etudiant === etudiantId);
          if (completion) {
            completion.marquer = updatedCompletion.marquer;
            completion.progression = updatedCompletion.progression;
          }
    
          // Now handle the subtasks
          task.sousTaches.forEach(subtask => {
            const subtaskCompletion = subtask.completions.find(c => c.etudiant === etudiantId);
            if (subtaskCompletion) {
              subtaskCompletion.marquer = isCompleted;
              subtaskCompletion.progression = isCompleted ? subtaskCompletion.totalSoustTaches : 0;
            }
          });
          
          console.log('Tâche marquée comme complétée:', updatedCompletion);
          this.updateTaskLists();
      this.cd.detectChanges();
    }
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la tâche:', tacheId, etudiantId, isCompleted, error);
      }
    );
  }
  markSubTaskAsCompleted(tacheId: number, etudiantId: number, isCompleted: boolean) {
    this.CompServ.markSubTaskAsCompleted(tacheId, etudiantId, isCompleted).subscribe(
      (updatedCompletion: Completion) => {
        const task = this.taches.find(t => t.id_Tache === tacheId);
        if (task) {
          // Update the main task completion (marquer and progression)
          const completion = task.completions.find(c => c.etudiant === etudiantId);
          if (completion) {
            completion.marquer = updatedCompletion.marquer;
            completion.progression = updatedCompletion.progression;
          }
    
          // Now handle the subtasks
          task.sousTaches.forEach(subtask => {
            const subtaskCompletion = subtask.completions.find(c => c.etudiant === etudiantId);
            if (subtaskCompletion) {
              subtaskCompletion.marquer = isCompleted;
              subtaskCompletion.progression = isCompleted ? subtaskCompletion.totalSoustTaches : 0;
            }
          });
          
          console.log('Tâche marquée comme complétée:', updatedCompletion);
          this.updateTaskLists();
      this.cd.detectChanges();
    }
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
      this.comment=""; 
      console.log('commentaire ajoutee avec succee', updatedCompletion);
            
    },
    (error) => {
      console.error('Erreur lors de la mise à jour de la tâche:', idTache,this.idEtudiant,error);
    }
  );
}
addSubTask(tache:Tache){
  this.selectedTacheId = tache.id_Tache;
  if (this.tacheForm.valid) {
    
    const t = this.tacheForm.value;
    this.tacheService.addSubTask(t,this.idEtudiant,tache.id_Tache).subscribe(
      (updatedTache: Tache) => {
        
        tache.completions=updatedTache.completions;
        tache.sousTaches = [...updatedTache.sousTaches];
        console.log('soustache ajoutee avec succee', tache.completions);
        this.updateMainTaskCompletion(tache,this.idEtudiant);
        this.cd.detectChanges();
        this.tacheForm.reset();
              
      },
    error => {
      console.error('Erreur lors de l\'ajout de la tâche:', error,t);
    }
  );
  

} else {
  console.log('Formulaire invalide, veuillez corriger les erreurs.');
}
}

updateMainTaskCompletion(task: Tache, etudiantId: number) {
   
  let totalCompleted = 0;
  let totalSubtasks = task.sousTaches.length;

  // Calculate how many subtasks are marked as completed
  task.sousTaches.forEach(subtask => {
    const subtaskCompletion = subtask.completions.find(c => c.etudiant === etudiantId);
    if (subtaskCompletion && subtaskCompletion.marquer) {
      totalCompleted++;
    }
  });

  // Update the main task's completion progress
  const mainCompletion = task.completions.find(c => c.etudiant === etudiantId);
  if (mainCompletion) {
    mainCompletion.progression = totalCompleted;
    mainCompletion.marquer = totalCompleted === totalSubtasks;
  }
}
  selectedTask: any;

  // openTaskDetails(tache: any) {
  //   this.selectedTask = tache;
  // }

  openTaskDetails(tache: Tache): void {
    this.selectedTask = tache;
  
    // Initialiser ou réinitialiser le temps écoulé pour la tâche sélectionnée
    if (!this.times[tache.id_Tache]) {
      this.times[tache.id_Tache] = 0;  // Initialiser si pas déjà défini
    }
  
    // Mettre à jour le timer en cours pour la tâche
    if (this.timers[tache.id_Tache] && !this.timers[tache.id_Tache].running) {
      // Si le timer est arrêté, calculer le temps écoulé et redémarrer si nécessaire
      localStorage.setItem(`timer-${tache.id_Tache}`, this.times[tache.id_Tache].toString());
      this.timers[tache.id_Tache].elapsedTime = this.times[tache.id_Tache];
    }
  
    // Forcer la détection de changements après mise à jour des données
    this.cd.detectChanges();
  }

  closeTaskDetails() {
    this.selectedTask = null;
  }
}
