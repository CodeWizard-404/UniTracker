import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Classe } from 'src/app/classes/classe';
import { Etudiant } from 'src/app/classes/etudiant';
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
  etudiant: Etudiant[] =[];
  filteredClasses: Classe[] = [];

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
      email_Etd: ['', [Validators.required]],      
      mot_de_passe_Etd: ['', Validators.required], // Password will be auto-generated
      adresse_Etd: [null],
      redoublant: ['false'],
      date_de_naissance_Etd: [null], 
      sexe_Etd: [null],
      telephone_Etd: [null],
      cin_Etd: [null],
      classe: ['', Validators.required],
      numClasse: [''],
      anneeClasse: ['', Validators.required]
    });

    this.loadClasses();
  }

  onSubmit(): void {
    console.log('Tentative de soumission du formulaire...');

    if (this.form.valid) {
        console.log('Formulaire valide. Préparation des données pour l\'envoi...');

        const formData = { ...this.form.value };

        formData.email_Etd = formData.email_Etd.trim();
        formData.nom_Etd = formData.nom_Etd.trim();
        formData.prenom_Etd = formData.prenom_Etd.trim();

        if (typeof formData.classe === 'object' && formData.classe !== null) {
            console.log('Classe correcte reçue comme objet:', formData.classe);
        } else {
            console.error('Erreur: la classe n\'est pas un objet valide. Valeur actuelle:', formData.classe);
            return;  
        }

        console.log('Données du formulaire après validation:', formData);

        this.etudiantservice.addEtud(formData).subscribe(
            response => {
                console.log('Étudiant ajouté avec succès:', response);
                this.router.navigate(['/listeetud']);
            },
            error => {
                console.error('Erreur lors de l\'ajout de l\'étudiant:', error);
            }
        );
    } else {
        console.error('Formulaire invalide. Veuillez corriger les erreurs suivantes :');

        Object.keys(this.form.controls).forEach(key => {
            const controlErrors = this.form.get(key)?.errors;
            if (controlErrors) {
                console.error(`Erreur dans le champ "${key}":`, controlErrors);
            } else {
                console.log(`Le champ "${key}" est valide.`);
            }
        });

        console.log('Contenu actuel du formulaire:', this.form.value);
    }
}

onClasseChange(event: Event): void {
  const selectElement = event.target as HTMLSelectElement; 
  if (selectElement) {
      const selectedClassValue = selectElement.value;
      const selectedClass = this.classes.find(c => c.nom_Classe === selectedClassValue);
      
      if (selectedClass) {
          console.log('Classe sélectionnée:', selectedClass);
          this.form.patchValue({ classe: selectedClass });
          this.form.patchValue({ numClasse: selectedClass.num_Classe });
      } else {
          console.error('Erreur: Classe non trouvée pour la valeur sélectionnée:', selectedClassValue);
      }
  }
}


onYearChange() {
  const selectedYear = this.form.get('anneeClasse')?.value;
  if (selectedYear) {
    this.filteredClasses = this.classes.filter(c => c.annee_Classe=== selectedYear); 
  } else {
    this.filteredClasses = [];
  }
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
