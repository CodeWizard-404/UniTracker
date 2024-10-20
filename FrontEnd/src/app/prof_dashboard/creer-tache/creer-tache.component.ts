import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Matiere } from 'src/app/classes/matiere';
import { Prof } from 'src/app/classes/prof';
import { Tache } from 'src/app/classes/tache';
import { CreerTacheService } from 'src/app/services/creer-tache.service';
import { MatiereServiceService } from 'src/app/services/matiere-service.service';
import { ProfServiceService } from 'src/app/services/prof-service.service';

@Component({
  selector: 'app-creer-tache',
  templateUrl: './creer-tache.component.html',
  styleUrls: ['./creer-tache.component.css']
})
export class CreerTacheComponent implements OnInit{
  form!: FormGroup;
  idProf!:number;
  profs:Prof[]=[]
  matieres:Matiere[]=[];
  constructor(
    private fb: FormBuilder,
    private tacheService: CreerTacheService,
    private router: Router,
    private route:ActivatedRoute,
    private matService:MatiereServiceService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      dateLimite: ['', Validators.required],
      matiere: ['', Validators.required],
    });
    this.idProf = Number(this.route.snapshot.paramMap.get('id'));
    this.matService.getMatieres().subscribe(
      (data) => {
        this.matieres = data;
      },
      (error) => {
        console.error("Erreur lors du chargement des matières", error);
      }
    );
  }

  addTache() {
    if (this.form.valid) {
      const formData = {
        ...this.form.value,  
        dateLimite: new Date(this.form.value.dateLimite).toISOString(),  // Convertir la date
      };
      this.tacheService.addTache(formData, this.idProf).subscribe(
        (response) => {
          console.log('Tâche ajoutée avec succès:', response);
          alert('tache ajoutee avec succès');
          this.router.navigate([`/dashboardProf/${this.idProf}/listetaches`]);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la tâche:', error);
        }
      );
    } else {
      console.log('Formulaire invalide, veuillez corriger les erreurs.');
    }
  }
  


}
