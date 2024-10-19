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
export class CreerEtudiantComponent implements OnInit {
  form!: FormGroup;
  classes: Classe[] = [];
  uniqueClasses: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private etudiantservice: EtudiantServiceService,
    private classeService: ClasseServiceService
  ) {}

  isPasswordVisible: boolean = false; 


  ngOnInit(): void {
    this.form = this.fb.group({
      nom_Etd: ['', Validators.required],
      prenom_Etd: ['', Validators.required],
      email_Etd: ['', [Validators.required, Validators.email]],      
      mot_de_passe_Etd: ['', Validators.required], // Password will be auto-generated
      adresse_Etd: [null],
      redoublant: ['false'],
      date_de_naissance_Etd: [null], 
      sexe_Etd: [null],
      telephone_Etd: [null],
      cin_Etd: [null],
      classe: ['', Validators.required],
      numClasse: ['', [Validators.required, Validators.min(1), Validators.max(15)]],
      anneeClasse: ['', Validators.required]
    });

    this.loadClasses();
  }

  onSubmit(): void {
    if (this.form.valid) {
        const formData = { ...this.form.value };

        // Create the classe object based on the selected class
        const selectedClass = this.classes.find(c => c.nom_Classe === formData.classe);
        if (selectedClass) {
            formData.classe = {
                id_Classe: selectedClass.id_Classe,
                nom_Classe: selectedClass.nom_Classe,
                annee_Classe: selectedClass.annee_Classe,
                num_Classe: selectedClass.num_Classe
            };
        }

        // Optionally log the complete formData
        console.log('Submitting formData:', formData);

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
        console.log('Formulaire invalide, veuillez corriger les erreurs.');
    }

    console.log('Form valid:', this.form.valid);
    console.log('Form errors:', this.form.errors);
    console.log('Form value:', this.form.value);
  }

  loadClasses() {
    this.classeService.getClasses().subscribe((data) => {
      this.classes = data;
      this.uniqueClasses = [...new Set(this.classes.map(classe => classe.nom_Classe))];
    });
  }
  

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
    this.form.get('mot_de_passe_Etd')?.setValue(password);
    console.log('Generated password:', password);
  }
  

  cancel() {
    this.router.navigate(['/listeetud']); 
  }
}
