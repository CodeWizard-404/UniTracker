import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tache } from 'src/app/classes/tache';
import { CreerTacheService } from 'src/app/services/creer-tache.service';

@Component({
  selector: 'app-creertache',
  templateUrl: './creertache.component.html',
  styleUrls: ['./creertache.component.css']
})
export class CreertacheComponent implements OnInit {
  tacheForm!: FormGroup;
  idEtudiant!: number; 
  taches: Tache[] = []
  constructor(private fb: FormBuilder, private tacheService: CreerTacheService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tacheForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      dateLimite: ['', Validators.required],
    });
    this.idEtudiant = Number(this.route.snapshot.paramMap.get('id')); 
    console.log(this.idEtudiant);
  }
  addTache(): void {
    if (this.tacheForm.valid) {
      const formData = {
        ...this.tacheForm.value,  
        dateLimite: new Date(this.tacheForm.value.dateLimite).toISOString(), 
      };
      const tache = this.tacheForm.value;
      this.tacheService.createTacheByEtudiant(this.idEtudiant, tache).subscribe(

        response => {
          console.log('Tâche ajoutée avec succès:', response);
          alert("Tâche ajoutée avec succès:");
        },
        error => {
          console.error('Erreur lors de l\'ajout de la tâche:', error);
        }
      );
    } else {
      console.log('Formulaire invalide, veuillez corriger les erreurs.');
    }
  }

 
}
