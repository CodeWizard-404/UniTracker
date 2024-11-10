import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Admin Dashboard Components
import { DashboardComponent } from './admin_dashboard/dashboard/dashboard.component';
import { ListesProfComponent } from './admin_dashboard/listes-prof/listes-prof.component';
import { ListesEtudiantsComponent } from './admin_dashboard/listes-etudiants/listes-etudiants.component';
import { ListeclasseComponent } from './admin_dashboard/listeclasse/listeclasse.component';
import { ListematiereComponent } from './admin_dashboard/listematiere/listematiere.component';
import { CreerProfComponent } from './admin_dashboard/creer-prof/creer-prof.component';
import { CreerEtudiantComponent } from './admin_dashboard/creer-etudiant/creer-etudiant.component';
import { CreerClasseComponent } from './admin_dashboard/creer-classe/creer-classe.component';
import { CreerMatiereComponent } from './admin_dashboard/creer-matiere/creer-matiere.component';
import { EditEtudiantComponent } from './admin_dashboard/edit-etudiant/edit-etudiant.component';

// Error Component
import { ErrorComponent } from './admin_dashboard/error/error.component';

// Professor Dashboard Components
import { CreerTacheComponent } from './prof_dashboard/creer-tache/creer-tache.component';
import { DashProfComponent } from './prof_dashboard/dash-prof/dash-prof.component';
import { ListetachesComponent } from './prof_dashboard/listetaches/listetaches.component';
import { AssignerTacheComponent } from './prof_dashboard/assigner-tache/assigner-tache.component';
import { UpdateTacheComponent } from './prof_dashboard/update-tache/update-tache.component';

// Student Dashboard Components
import { DashboardEtdComponent } from './dashboard_Etd/dashboard-etd/dashboard-etd.component';
import { CreertacheComponent } from './dashboard_Etd/creertache-perso/creertache.component';
import { ListetachepersoComponent } from './dashboard_Etd/listetacheperso/listetacheperso.component';
import { CreergroupeComponent } from './dashboard_Etd/creergroupe/creergroupe.component';
import { ModifierTacheComponent } from './dashboard_Etd/modifier-tache/modifier-tache.component';
import { UpdateClasseComponent } from './admin_dashboard/update-classe/update-classe.component';
import { EditProfComponent } from './admin_dashboard/edit-prof/edit-prof.component';

const routes: Routes = [
  // Admin Routes
  { path: 'dashboard', title: 'Admin', component: DashboardComponent },
  { path: 'listeprof', title: 'Les Professeurs', component: ListesProfComponent },
  { path: 'edit-prof/:id', title: 'Modifier Professeur', component: EditProfComponent },
  { path: 'listeetud', title: 'Les Étudiants', component: ListesEtudiantsComponent },
  { path: 'edit-etudiant/:id', title: 'Modifier Étudiant', component: EditEtudiantComponent },
  { path: 'listeclasse', title: 'Les Classes', component: ListeclasseComponent },
  { path: 'listmatiere', title: 'Les Matières', component: ListematiereComponent },
  
  { path: 'profs', title: 'Créer Professeur', component: CreerProfComponent },
  { path: 'etd', title: 'Créer Étudiant', component: CreerEtudiantComponent },
  { path: 'classe', title: 'Créer Classe', component: CreerClasseComponent },
  { path: 'mat', title: 'Créer Matière', component: CreerMatiereComponent },
  { path: 'updateClasse/:id', title: 'updateClasse', component: UpdateClasseComponent },

  // Professor Routes
  { path: 'dashboardProf/:id/creerTache', title: 'Créer Tâche', component: CreerTacheComponent },
  { path: 'dashboardProf', title: 'Professeur', component: DashProfComponent },
  { path: 'dashboardProf/:id/listetaches', title: 'Liste des Tâches', component: ListetachesComponent },
  { path: 'assignerTache/:id', title: 'Attribuer Tâche', component: AssignerTacheComponent },
  { path: 'dashboardProf/:id/taches/:idTache', title: 'Modifier Tâche', component: UpdateTacheComponent },

  // Student Routes
  { path: 'dashEtd', title: 'Étudiant', component: DashboardEtdComponent },
  { path: 'dashEtd/:id/creertacheperso', title: 'Créer Tâche Personnalisée', component: CreertacheComponent },
  { path: 'dashEtd/:id/listetacheperso', title: 'Liste des Tâches Personnalisées', component: ListetachepersoComponent },
  { path: 'creerGroupe', title: 'Créer Groupe', component: CreergroupeComponent },
  { path: 'dashboardEtud/:id/taches/:idTache', title: 'Modifier Tâche', component: ModifierTacheComponent },

  // Default and Error Routes
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', title: 'Erreur', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
