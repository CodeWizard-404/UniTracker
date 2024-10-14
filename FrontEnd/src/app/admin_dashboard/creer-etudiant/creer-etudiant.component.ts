import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Classe } from 'src/app/classes/classe';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-creer-etudiant',
  templateUrl: './creer-etudiant.component.html',
  styleUrls: ['./creer-etudiant.component.css']
})
export class CreerEtudiantComponent implements OnInit{
  form!:FormGroup;
  classes:Classe[]=[]
constructor(private fb:FormBuilder,private  router:Router,private etudiantservice:EtudiantServiceService,
  private  classeService:ClasseServiceService) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      id_Etudiant: ['', Validators.required],
      nom_Etd: ['', Validators.required],
      prenom_Etd: ['', Validators.required],
      email_Etd: ['', [Validators.required, Validators.email]],
      adresse_Etd: ['', Validators.required],
      redoublant: ['false', Validators.required],
      date_de_naissance_Etd: ['', Validators.required],
      sexe_Etd: ['', Validators.required],
      telephone_Etd: ['', Validators.required],
      mot_de_passe_Etd: ['', Validators.required],
      cin_Etd: ['', Validators.required],
    });

    this.loadClasses();
  }
  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      this.etudiantservice.addEtud(formData).subscribe(
        response => {
          console.log('Etudiant ajouté avec succès:', response);
          this.router.navigate(['/listeetud']);
        },
        error => {
          console.error('Erreur lors de l\'ajout du etudiant:', error);
        }
      );
    } else {
      console.log(this.form.value);
      console.log('Formulaire invalide, veuillez corriger les erreurs.');
    }
  }
  loadClasses() {
    this.classeService.getClasses().subscribe((data) => {
      this.classes = data;
    });
  }

}
