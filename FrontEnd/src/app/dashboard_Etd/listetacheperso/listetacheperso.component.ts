import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Completion } from 'src/app/classes/completion';
import { Tache } from 'src/app/classes/tache';
import { CompletionService } from 'src/app/services/completion.service';
import { CreerTacheService } from 'src/app/services/creer-tache.service';
import { BehaviorSubject } from 'rxjs';


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
  selectedTask: any;


  tempsEcoule: number = 0;
  running: boolean = false;

    timers: { [key: number]: any } = {}; 
    times: { [key: number]: number } = {}; 
    taskUpdates$ = new BehaviorSubject<void>(undefined); // Emit changes to trigger updates


  constructor(private cd: ChangeDetectorRef,private fb: FormBuilder,private tacheService: CreerTacheService, private route: ActivatedRoute, private CompServ: CompletionService) { }

  ngOnInit(): void {
    this.tacheForm = this.fb.group({
      titre: ['', Validators.required]
    });
    this.idEtudiant = Number(this.route.snapshot.paramMap.get('id')); 
    this.loadTasks();
    this.retrieveSavedTimers();
    this.calculateStudentProgression();

    this.taskUpdates$.subscribe(() => {
      this.cd.detectChanges();
      this.cd.markForCheck();

    });
  
    // Récupérer les temps sauvegardés dans localStorage
    this.taches.forEach(tache => {
      const savedTime = localStorage.getItem(`timer-${tache.id_Tache}`);
      if (savedTime) {
        this.times[tache.id_Tache] = parseInt(savedTime, 10);
      }
    });

    this.taskUpdates$.subscribe(() => {
      this.cd.detectChanges();
  });
  }



  loadTasks() {
    this.tacheService.getTasksByEtudiant(this.idEtudiant).subscribe(
      (response: Tache[]) => {
        this.taches = response.filter(tache => !tache.tachePrincipale);  
        this.updateTaskLists(); 
        this.taskUpdates$.next(); // Trigger view update

      },
      (error) => {
        console.error('Erreur lors de la récupération des tâches:', error);
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
          this.cd.markForCheck();

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
  updateMainTaskCompletion(task: Tache, etudiantId: number) {
     
    let totalCompleted = 0;
    let totalSubtasks = task.sousTaches.length;
  
    // Calculate how many subtasks are marked as completed
    task.sousTaches.forEach(subtask => {
      const subtaskCompletion = subtask.completions.find(c => c.etudiant === etudiantId);
      if (subtaskCompletion && subtaskCompletion.marquer) {
        totalCompleted++;
        
      }
      this.updateTaskLists();

    });
  
    // Update the main task's completion progress
    const mainCompletion = task.completions.find(c => c.etudiant === etudiantId);
    if (mainCompletion) {
      mainCompletion.progression = totalCompleted;
      mainCompletion.marquer = totalCompleted === totalSubtasks;
      this.taskUpdates$.next();
      this.cd.markForCheck();
      this.updateTaskLists();

    }
  }

  deleteTask(idTache: number, idEtudiant: number): void {
    this.tacheService.deleteTaskByEtud(idTache, idEtudiant).subscribe(
      (response: boolean) => {
        if (response) {
          console.log('Tâche supprimée avec succès.');
          this.taches = this.taches.filter(tache => tache.id_Tache !== idTache);
          this.updateTaskLists();
          this.selectedTask = null;
        } else {
          console.log('La tâche n\'a pas été trouvée ou n\'appartient pas au professeur.');
        }
      },
      error => {
        console.error('Erreur lors de la suppression de la tâche:', error);
      }
    );
  }

  markTaskAsCompleted(tacheId: number, etudiantId: number, isCompleted: boolean) {

    this.CompServ.markTaskAsCompleted(tacheId, etudiantId, isCompleted).subscribe(
      
      (updatedCompletion: Completion) => {
        this.loadTasks();
        this.updateTaskLists();
        this.cd.detectChanges();
        this.cd.markForCheck();

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
          this.cd.markForCheck();

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
          this.taskUpdates$.next();  // Trigger view update
          this.cd.detectChanges();
          this.cd.markForCheck();
      

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

  retrieveSavedTimers() {
    this.todoTasks.forEach(task => {
      const savedTime = localStorage.getItem(`timer-${task.id_Tache}`);
      if (savedTime) {
        this.times[task.id_Tache] = parseInt(savedTime, 10);
      }
    });
  }




  toggleTimer(taskId: number) {
    if (!this.timers[taskId]) {
      this.startTimer(taskId);
    } else {
      this.stopTimer(taskId);
    }
  }
  startTimer(taskId: number) {
    this.timers[taskId] = setInterval(() => {
      this.times[taskId] = (this.times[taskId] || 0) + 1;
      localStorage.setItem(`timer-${taskId}`, this.times[taskId].toString());
      this.taskUpdates$.next(); // Trigger view update
    }, 1000);
  }

  stopTimer(taskId: number) {
    clearInterval(this.timers[taskId]);
    delete this.timers[taskId];
    this.taskUpdates$.next(); // Trigger view update
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

addComment(idTache: number,comment:String,c:Completion){
  
  console.log(comment);
  this.CompServ.addComment(idTache,this.idEtudiant,comment).subscribe(
    (updatedCompletion: Completion) => {
      c.commentaires = updatedCompletion.commentaires;
      this.comment=""; 
      this.taskUpdates$.next(); // Trigger view update

      console.log('commentaire ajoutee avec succee', updatedCompletion);
            
    },
    (error) => {
      console.error('Erreur lors de la mise à jour de la tâche:', idTache,this.idEtudiant,error);
    }
  );
}









calculateStudentProgression() {
  // Filtrer les sous-tâches pour cet étudiant uniquement
  const studentSubtasks = this.selectedTask.sousTaches.filter((subtask: any) =>
    subtask.completions.some((completion: any) => completion.etudiant === this.idEtudiant)
  );

  // Calculer le total de sous-tâches pour cet étudiant
  this.totalStudentSubtasks = studentSubtasks.length;
}

  openTaskDetails(tache: Tache): void {
    this.selectedTask = tache;
    this.taskUpdates$.next(); // Trigger view update

    if (!this.times[tache.id_Tache]) {
      this.times[tache.id_Tache] = 0;  
    }
    if (this.timers[tache.id_Tache] && !this.timers[tache.id_Tache].running) {
      localStorage.setItem(`timer-${tache.id_Tache}`, this.times[tache.id_Tache].toString());
      this.timers[tache.id_Tache].elapsedTime = this.times[tache.id_Tache];
    }
  
    // Forcer la détection de changements après mise à jour des données
    this.cd.detectChanges();
    this.cd.markForCheck();

  }
  closeTaskDetails() {
    this.selectedTask = null;
    this.taskUpdates$.next();
    this.cd.detectChanges();
    this.cd.markForCheck();
    this.updateTaskLists();
  }
}
