import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../UniTracker/src/app/app.component';
import { AppRoutingModule } from '../UniTracker/src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatSnackBarModule } from '@angular/material/snack-bar';
//import { ToastrModule } from 'ngx-toastr';

import { DashboardAComponent } from '../UniTracker/src/app/Dashboard_Admin/dashboard-a/dashboard-a.component';
import { NavbarAComponent } from '../UniTracker/src/app/Dashboard_Admin/navbar-a/navbar-a.component';
import { SidebarAComponent } from '../UniTracker/src/app/Dashboard_Admin/sidebar-a/sidebar-a.component';
import { ListProfComponent } from '../UniTracker/src/app/Dashboard_Admin/list-prof/list-prof.component';
import { ListEtudiantComponent } from '../UniTracker/src/app/Dashboard_Admin/list-etudiant/list-etudiant.component';
import { ListClasseComponent } from '../UniTracker/src/app/Dashboard_Admin/list-classe/list-classe.component';
import { ListMatiereComponent } from '../UniTracker/src/app/Dashboard_Admin/list-matiere/list-matiere.component';
import { CreerProfComponent } from '../UniTracker/src/app/Dashboard_Admin/creer-prof/creer-prof.component';
import { CreerEtudiantComponent } from '../UniTracker/src/app/Dashboard_Admin/creer-etudiant/creer-etudiant.component';
import { CreerClasseComponent } from '../UniTracker/src/app/Dashboard_Admin/creer-classe/creer-classe.component';
import { CreerMatiereComponent } from '../UniTracker/src/app/Dashboard_Admin/creer-matiere/creer-matiere.component';
import { ErrorComponent } from '../UniTracker/src/app/Dashboard_Admin/error/error.component';

import { DashboardPComponent } from '../UniTracker/src/app/Dashboard_Prof/dashboard-p/dashboard-p.component';
import { NavbarPComponent } from '../UniTracker/src/app/Dashboard_Prof/navbar-p/navbar-p.component';
import { SidebarPComponent } from '../UniTracker/src/app/Dashboard_Prof/sidebar-p/sidebar-p.component';
import { TaskAssignComponent } from '../UniTracker/src/app/Dashboard_Prof/task-assign/task-assign.component';
import { TaskCreatePComponent } from '../UniTracker/src/app/Dashboard_Prof/task-create-p/task-create-p.component';
import { TaskListPComponent } from '../UniTracker/src/app/Dashboard_Prof/task-list-p/task-list-p.component';
import { TaskUpdateComponent } from '../UniTracker/src/app/Dashboard_Prof/task-update/task-update.component';

import { DashboardEComponent } from '../UniTracker/src/app/Dashboard_Etudiant/dashboard-e/dashboard-e.component';
import { NavbarEComponent } from '../UniTracker/src/app/Dashboard_Etudiant/navbar-e/navbar-e.component';
import { SidebarEComponent } from '../UniTracker/src/app/Dashboard_Etudiant/sidebar-e/sidebar-e.component';
import { TaskCreateEComponent } from '../UniTracker/src/app/Dashboard_Etudiant/task-create-e/task-create-e.component';
import { TaskListEComponent } from '../UniTracker/src/app/Dashboard_Etudiant/task-list-e/task-list-e.component';
import { GroupeCreateComponent } from '../UniTracker/src/app/Dashboard_Etudiant/groupe-create/groupe-create.component';
import { TaskEditEComponent } from '../UniTracker/src/app/Dashboard_Etudiant/task-edit-e/task-edit-e.component';








@NgModule({
    declarations: [
      AppComponent,
      
      // Dashboard Admin
      DashboardAComponent,
      NavbarAComponent,
      SidebarAComponent,
      ListProfComponent,
      ListEtudiantComponent,
      ListClasseComponent,
      ListMatiereComponent,
      CreerProfComponent,
      CreerEtudiantComponent,
      CreerClasseComponent,
      CreerMatiereComponent,
      ErrorComponent,
  
      // Dashboard Prof
      DashboardPComponent,
      NavbarPComponent,
      SidebarPComponent,
      TaskAssignComponent,
      CreerProfComponent,
      TaskListPComponent,
      TaskUpdateComponent,
  
      // Dashboard Etudiant
      DashboardEComponent,
      NavbarEComponent,
      SidebarEComponent,
      TaskCreateEComponent,
      TaskListEComponent,
      GroupeCreateComponent,
      TaskEditEComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

    BrowserAnimationsModule,
    //MatSnackBarModule,
    //ToastrModule.forRoot({
    //  positionClass: 'toast-top-center', 
    //  timeOut: 3000,                  
    //  closeButton: true                  
    //}),

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
