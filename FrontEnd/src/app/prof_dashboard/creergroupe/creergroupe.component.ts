import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from 'src/app/classes/etudiant';
import { Groupe } from 'src/app/classes/groupe';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-creergroupe',
  templateUrl: './creergroupe.component.html',
  styleUrls: ['./creergroupe.component.css']
})
export class CreergroupeComponent implements OnInit {
  form!: FormGroup;
  etudiants: Etudiant[] = [];

  constructor(
    private fb: FormBuilder,
    private groupeService: GroupeService,
    private etudiantService: EtudiantServiceService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      libelle_Groupe: ['', Validators.required],
      etudiants: [[], Validators.required]  
    });

    this.loadEtudiants();
  }

  loadEtudiants() {
    this.etudiantService.getEtudiants().subscribe((data) => {
      this.etudiants = data;
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      const groupe: Groupe = {
        libelle_Groupe: formData.libelle_Groupe,
        etudiants: formData.etudiants
      };

      this.groupeService.addGroupe(groupe).subscribe(
        response => {
          console.log('Groupe créé avec succès:', response);
          alert("Groupe créé avec succès:")
        },
        error => {
          console.error('Erreur lors de la création du groupe:', error);
        }
      );
    } else {
      console.log('Formulaire invalide, veuillez corriger les erreurs.');
    }
  }
}