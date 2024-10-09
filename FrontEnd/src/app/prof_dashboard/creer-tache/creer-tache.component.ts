import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Prof } from 'src/app/classes/prof';
import { Tache } from 'src/app/classes/tache';
import { CreerTacheService } from 'src/app/services/creer-tache.service';
import { ProfServiceService } from 'src/app/services/prof-service.service';

@Component({
  selector: 'app-creer-tache',
  templateUrl: './creer-tache.component.html',
  styleUrls: ['./creer-tache.component.css']
})
export class CreerTacheComponent implements OnInit{
  form!: FormGroup;
  profs:Prof[]=[]
  constructor(
    private fb: FormBuilder,
    private tacheService: CreerTacheService,
    private router: Router,
    private profService:ProfServiceService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      dateLimite: ['', Validators.required],
      id_Professeur: ['', Validators.required],
    });
    this.loadProf();
  }

  addTache() {
    if (this.form.valid) {
      const formData = {
        ...this.form.value,  
        dateLimite: new Date(this.form.value.dateLimite).toISOString(),  // Convertir la date
      };
      const idProf = this.form.value.id_Professeur;
      this.tacheService.addTache(formData, idProf).subscribe(
        (response) => {
          console.log('Tâche ajoutée avec succès:', response);
          alert('tache ajoutee avec succès');
          this.router.navigate(['/listetaches']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la tâche:', error);
        }
      );
    } else {
      console.log('Formulaire invalide, veuillez corriger les erreurs.');
    }
  }
  loadProf(){
    this.profService.getProfesseurs().subscribe(data=>{
      this.profs=data;
    }, error => {
      console.error('Erreur lors du chargement des profs', error);
    });
  }


}
