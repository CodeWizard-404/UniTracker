import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from 'src/app/classes/classe';
import { Etudiant } from 'src/app/classes/etudiant';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent {
  
  etudiant: Etudiant;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private etudiantService: EtudiantServiceService,
    private fb: FormBuilder
  ) {
    this.etudiant = new Etudiant(
      0,                    // id_Etudiant
      '',                   // nom_Etd
      '',                   // prenom_Etd
      '',                   // email_Etd
      '',                   // mot_de_passe_Etd

      new Classe(),         // classe : ici vous devez créer un objet de type Classe
      '',
      0,                    // numClasse
      0,                    // anneeClasse
      []                    // groupes
    );
    this.editForm = this.fb.group({
      nom_Etd: ['', Validators.required],
      prenom_Etd: ['', Validators.required],
      email_Etd: ['', [Validators.required, Validators.email]],
      mot_de_passe_Etd: ['', Validators.required],
      classe: this.fb.group({
        nomClasse: ['', Validators.required],
        anneeClasse: [null, Validators.required],
        numClasse: [null, Validators.required]
      })
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;  // Récupérer l'ID de l'étudiant
    this.etudiantService.getEtudiants().subscribe((etudiants) => {
      // Trouver l'étudiant par ID
      this.etudiant = etudiants.find(etd => etd.id_Etudiant === id)!;
      
      if (this.etudiant) {
        // Remplir le formulaire avec les données de l'étudiant
        this.editForm.patchValue({
          nom_Etd: this.etudiant.nom_Etd,
          prenom_Etd: this.etudiant.prenom_Etd,
          email_Etd: this.etudiant.email_Etd,
          mot_de_passe_Etd: this.etudiant.mot_de_passe_Etd,
          // Remplir les informations de la classe
          classe: {
            nomClasse: this.etudiant.classe.nom_Classe,
            anneeClasse: this.etudiant.classe.annee_Classe,
            numClasse: this.etudiant.classe.num_Classe
          }
        });
      } else {
        console.error('Étudiant non trouvé');
      }
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.etudiantService.updateEtudiant(this.etudiant.id_Etudiant, this.editForm.value).subscribe(
        () => {
          this.router.navigate(['/listes-etudiants']);
          alert('Étudiant mis à jour avec succès!');
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'étudiant', error);
        }
      );
    }
  }

  isPasswordVisible: boolean = false; 

  
  generatePassword(length = 8): string {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*@#";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  generateAndSetPassword(): void {
    const password = this.generatePassword();
    this.editForm.get('mot_de_passe_Etd')?.setValue(password);
    console.log('Generated password:', password);
  }
}

