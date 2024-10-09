import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfServiceService } from 'src/app/services/prof-service.service';

@Component({
  selector: 'app-creer-prof',
  templateUrl: './creer-prof.component.html',
  styleUrls: ['./creer-prof.component.css']
})
export class CreerProfComponent implements OnInit { 
  form!:FormGroup;  
  constructor(private fb:FormBuilder,private profService:ProfServiceService,private router:Router){ }

  ngOnInit(): void {
    this.form = this.fb.group({
      id_Professeur: ['', Validators.required],
      nom_Prof: ['', Validators.required],
      prenom_Prof: ['', Validators.required],
      email_Prof: ['', [Validators.required, Validators.email]],
      cin_Prof: ['', Validators.required],
      sexe_Prof: ['', Validators.required],
      telephone_Prof: ['', Validators.required],
      mot_de_passe_Prof: ['', Validators.required],
     
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      this.profService.addProf(formData).subscribe(
        response => {
          console.log('Professeur ajouté avec succès:', response);
          this.router.navigate(['/listeprof']);
        },
        error => {
          console.error('Erreur lors de l\'ajout du professeur:', error);
        }
      );
    } else {
      console.log('Formulaire invalide, veuillez corriger les erreurs.');
    }
  }
}
