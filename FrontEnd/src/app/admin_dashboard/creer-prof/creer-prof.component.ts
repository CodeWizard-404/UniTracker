import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProfServiceService } from "src/app/services/prof-service.service";

@Component({
  selector: "app-creer-prof",
  templateUrl: "./creer-prof.component.html",
  styleUrls: ["./creer-prof.component.css"],
})
export class CreerProfComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private profService: ProfServiceService,
    private router: Router
  ) {}
  
  isPasswordVisible: boolean = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      nom_Prof: ["", Validators.required],
      prenom_Prof: ["", Validators.required],
      email_Prof: ["", [Validators.required, Validators.email]],
      cin_Prof: [null],
      sexe_Prof: [null],
      telephone_Prof: [null],
      mot_de_passe_Prof: ["", Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.value;

      this.profService.addProf(formData).subscribe(
        (response) => {
          console.log("Professeur ajouté avec succès:", response);
          this.router.navigate(["/listeprof"]);
        },
        (error) => {
          console.error("Erreur lors de l'ajout du professeur:", error);
        }
      );
    } else {
      console.log("Formulaire invalide, veuillez corriger les erreurs.");
    }
  }

  generatePassword(length = 8): string {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*@#";
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
    this.form.get("mot_de_passe_Etd")?.setValue(password);
    console.log("Generated password:", password);
  }

  cancel() {
    this.router.navigate(["/listeetud"]);
  }
}
