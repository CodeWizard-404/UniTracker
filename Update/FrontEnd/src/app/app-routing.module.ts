import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardAComponent } from './Dashboard_Admin/dashboard-a/dashboard-a.component';
import { ListProfComponent } from './Dashboard_Admin/list-prof/list-prof.component';
import { ListEtudiantComponent } from './Dashboard_Admin/list-etudiant/list-etudiant.component';
import { ListClasseComponent } from './Dashboard_Admin/list-classe/list-classe.component';
import { ListMatiereComponent } from './Dashboard_Admin/list-matiere/list-matiere.component';
import { CreerProfComponent } from './Dashboard_Admin/creer-prof/creer-prof.component';
import { CreerEtudiantComponent } from './Dashboard_Admin/creer-etudiant/creer-etudiant.component';
import { CreerClasseComponent } from './Dashboard_Admin/creer-classe/creer-classe.component';
import { CreerMatiereComponent } from './Dashboard_Admin/creer-matiere/creer-matiere.component';
import { ErrorComponent } from './Dashboard_Admin/error/error.component';

import { DashboardPComponent } from './Dashboard_Prof/dashboard-p/dashboard-p.component';
import { TaskAssignComponent } from './Dashboard_Prof/task-assign/task-assign.component';
import { TaskCreatePComponent } from './Dashboard_Prof/task-create-p/task-create-p.component';
import { TaskListPComponent } from './Dashboard_Prof/task-list-p/task-list-p.component';
import { TaskUpdateComponent } from './Dashboard_Prof/task-update/task-update.component';

import { DashboardEComponent } from './Dashboard_Etudiant/dashboard-e/dashboard-e.component';
import { TaskCreateEComponent } from './Dashboard_Etudiant/task-create-e/task-create-e.component';
import { TaskListEComponent } from './Dashboard_Etudiant/task-list-e/task-list-e.component';
import { GroupeCreateComponent } from './Dashboard_Etudiant/groupe-create/groupe-create.component';
import { TaskEditEComponent } from './Dashboard_Etudiant/task-edit-e/task-edit-e.component';

const routes: Routes = [
  // Dashboard Admin
  { path: 'dashboard', title: 'Dashbord', component: DashboardAComponent },
  { path: 'listeprof', title: 'Liste des Professeurs', component: ListProfComponent },
  { path: 'listeetud', title: 'Liste des Étudiants', component: ListEtudiantComponent },
  { path: 'listeclasse', title: 'Liste des Classes', component: ListClasseComponent },
  { path: 'listmatiere', title: 'Liste des Matières', component: ListMatiereComponent },

  { path: 'profs', title: 'Créer un Professeur', component: CreerProfComponent },
  { path: 'etd', title: 'Créer un Étudiant', component: CreerEtudiantComponent },
  { path: 'classe', title: 'Créer une Classe', component: CreerClasseComponent },
  { path: 'mat', title: 'Créer une Matière', component: CreerMatiereComponent },

  // Dashboard Prof
  { path: 'dashboardProf', title: 'Dashboard Professeur', component: DashboardPComponent },
  { path: 'dashboardProf/:id/assignerTache', title: 'Attribuer une Tâche', component: TaskAssignComponent },
  { path: 'dashboardProf/:id/creerTache', title: 'Créer une Tâche', component: TaskCreatePComponent },
  { path: 'dashboardProf/:id/listetaches', title: 'Liste des Tâches', component: TaskListPComponent },
  { path: 'dashboardProf/:id/taches/:idTache', title: 'Modifier la Tâche', component: TaskUpdateComponent },

  // Dashboard Étudiant
  { path: 'dashEtd', title: 'Dashboard Étudiant', component: DashboardEComponent },
  { path: 'dashEtd/:id/creertacheperso', title: 'Créer une Tâche Personnelle', component: TaskCreateEComponent },
  { path: 'dashEtd/:id/listetacheperso', title: 'Liste des Tâches Personnelles', component: TaskListEComponent },
  { path: 'creerGroupe', title: 'Créer un Groupe', component: GroupeCreateComponent },
  { path: 'dashEtd/:id/taches/:idTache', title: 'Modifier une Tâche', component: TaskEditEComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', title: 'Erreur', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
