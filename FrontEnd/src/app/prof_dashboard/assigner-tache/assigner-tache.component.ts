import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/classes/etudiant';
import { CreerTacheService } from 'src/app/services/creer-tache.service';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-assigner-tache',
  templateUrl: './assigner-tache.component.html',
  styleUrls: ['./assigner-tache.component.css']
})
export class AssignerTacheComponent implements OnInit{
  tacheId!: number; // ID de la tâche à attribuer
  etudiants: Etudiant[] = []; // Liste des étudiants
  selectedEtudiants: number[] = []; 
  constructor(private etudiantService:EtudiantServiceService,private tacheService:CreerTacheService){}
  ngOnInit(): void {
    this.loadEtudiants();
  }

  loadEtudiants() {
    this.etudiantService.getEtudiants().subscribe(
      data => {
        this.etudiants = data;
      },
      error => {
        console.error('Erreur lors du chargement des étudiants', error);
      }
    );
  }

  assignTask() {
    if (this.tacheId && this.selectedEtudiants.length > 0) {
      this.tacheService.assignTask(this.tacheId, this.selectedEtudiants).subscribe(
        response => {
          console.log('Tâche assignée avec succès:', response);
          alert('Tâche assignée avec succès');
        },
        error => {
          console.error('Erreur lors de l\'attribution de la tâche:', error);
        }
      );
    } else {
      console.log('Veuillez sélectionner au moins un étudiant et entrer l\'ID de la tâche.');
    }
  }
  onEtudiantChange(event: any) {
    const idEtudiant = parseInt(event.target.value, 10);
    if (event.target.checked) {
      this.selectedEtudiants.push(idEtudiant);
    } else {
      this.selectedEtudiants = this.selectedEtudiants.filter(id => id !== idEtudiant);
    }
  }

  
}
