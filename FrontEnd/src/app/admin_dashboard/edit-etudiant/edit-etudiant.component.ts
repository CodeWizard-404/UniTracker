import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Classe } from 'src/app/classes/classe';
import { Etudiant } from 'src/app/classes/etudiant';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {
  form!: FormGroup;
  classes: Classe[] = [];
  uniqueClasses: string[] = [];
  etudiant!: Etudiant;  
  filteredClasses: Classe[] = [];
  etudiantId!: string;  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
    private etudiantService: EtudiantServiceService,
    private classeService: ClasseServiceService
  ) {}

  ngOnInit(): void {

    this.etudiantId = this.activatedRoute.snapshot.paramMap.get('id')!;


    this.form = this.fb.group({
      nom_Etd: ['', Validators.required],
      prenom_Etd: ['', Validators.required],
      email_Etd: ['', [Validators.required]],
      mot_de_passe_Etd: ['', Validators.required], 
      classe: ['HHH', Validators.required],
      numClasse: [''],
      anneeClasse: ['', Validators.required]
    });

 
    this.loadClasses();
    this.loadEtudiant(Number(this.etudiantId));
  }


  loadEtudiant(id: number) {
    this.etudiantService.getEtudiantById(id).subscribe(
      (etudiant: Etudiant) => {
        this.etudiant = etudiant;
       
        this.form.patchValue({
          nom_Etd: this.etudiant.nom_Etd,
          prenom_Etd: this.etudiant.prenom_Etd,
          email_Etd: this.etudiant.email_Etd,
          mot_de_passe_Etd: this.etudiant.mot_de_passe_Etd,
          classe: this.etudiant.nomClasse,  
          numClasse: this.etudiant.numClasse,
          anneeClasse: this.etudiant.anneeClasse
        });
        this.onYearChange(); 
      },
      (error) => {
        console.error('Erreur lors du chargement de l\'étudiant:', error);
      }
    );
  }


  loadClasses() {
    this.classeService.getClasses().subscribe((data) => {
      this.classes = data;
      console.log('Classes chargées:', this.classes); 
      this.uniqueClasses = [...new Set(this.classes.map(classe => classe.nom_Classe))];
    }, (error) => {
      console.error('Erreur lors du chargement des classes:', error);
    });
  }
  onClasseChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedClassValue = selectElement.value;
  
    
    console.log('Classes filtrées disponibles:', this.filteredClasses);
    console.log('Valeur sélectionnée:', selectedClassValue);
  
   
    const selectedClass = this.filteredClasses.find(c => c.nom_Classe === selectedClassValue);
  
    if (selectedClass) {
      console.log('Classe trouvée:', selectedClass);
      this.form.patchValue({
        classe: selectedClass,       
        numClasse: selectedClass.num_Classe
      });
    } else {
      console.error('Erreur: Classe non trouvée pour la valeur sélectionnée:', selectedClassValue);
    }
  }

  onYearChange() {
    const selectedYear = this.form.get('anneeClasse')?.value;
    console.log('Année sélectionnée:', selectedYear);  
    
    if (selectedYear) {
      this.filteredClasses = this.classes.filter(c => c.annee_Classe === selectedYear);
      console.log('Classes filtrées après changement d\'année:', this.filteredClasses); 
    } else {
      this.filteredClasses = this.classes;  
      console.log('Aucune année sélectionnée, toutes les classes sont affichées:', this.filteredClasses);
    }
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

 
      this.etudiantService.updateEtudiant((Number(this.etudiantId)), formData).subscribe(
        (response) => {
          console.log('Étudiant modifié avec succès:', response);
          this.router.navigate(['/listeetud']);
        },
        (error) => {
          console.error('Erreur lors de la modification de l\'étudiant:', error);
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



  
}
