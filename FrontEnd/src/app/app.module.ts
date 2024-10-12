import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin_dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './admin_dashboard/sidebar/sidebar.component';
import { NavbarComponent } from './admin_dashboard/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ListesProfComponent } from './admin_dashboard/listes-prof/listes-prof.component';
import { ListesEtudiantsComponent } from './admin_dashboard/listes-etudiants/listes-etudiants.component';
import { ListeclasseComponent } from './admin_dashboard/listeclasse/listeclasse.component';
import { ListematiereComponent } from './admin_dashboard/listematiere/listematiere.component';
import { CreerProfComponent } from './admin_dashboard/creer-prof/creer-prof.component';
import { CreerEtudiantComponent } from './admin_dashboard/creer-etudiant/creer-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './admin_dashboard/error/error.component';
import { CreerClasseComponent } from './admin_dashboard/creer-classe/creer-classe.component';
import { CreerMatiereComponent } from './admin_dashboard/creer-matiere/creer-matiere.component';
import { CreerTacheComponent } from './prof_dashboard/creer-tache/creer-tache.component';
import { DashProfComponent } from './prof_dashboard/dash-prof/dash-prof.component';
import { ListetachesComponent } from './prof_dashboard/listetaches/listetaches.component';
import { AssignerTacheComponent } from './prof_dashboard/assigner-tache/assigner-tache.component';
import { SidebarProfComponent } from './prof_dashboard/sidebar-prof/sidebar-prof.component';
import { NavbarProfComponent } from './prof_dashboard/navbar-prof/navbar-prof.component';

import { SupprimerTacheComponent } from './prof_dashboard/supprimer-tache/supprimer-tache.component';

import { DashboardEtdComponent } from './dashboard_Etd/dashboard-etd/dashboard-etd.component';
import { NavbarEtdComponent } from './dashboard_Etd/navbar-etd/navbar-etd.component';
import { SidebarEtdComponent } from './dashboard_Etd/sidebar-etd/sidebar-etd.component';
import { CreertacheComponent } from './dashboard_Etd/creertache-perso/creertache.component';
import { ListetachepersoComponent } from './dashboard_Etd/listetacheperso/listetacheperso.component';
import { CreergroupeComponent } from './prof_dashboard/creergroupe/creergroupe.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    ListesProfComponent,
    ListesEtudiantsComponent,
    ListeclasseComponent,
    ListematiereComponent,
    CreerProfComponent,
    CreerEtudiantComponent,
    ErrorComponent,
    CreerClasseComponent,
    CreerMatiereComponent,
    CreerTacheComponent,
 
    DashProfComponent,
    ListetachesComponent,
    AssignerTacheComponent,
    SidebarProfComponent,
    NavbarProfComponent,

    SupprimerTacheComponent,

    DashboardEtdComponent,
    NavbarEtdComponent,
    SidebarEtdComponent,
    CreertacheComponent,
    ListetachepersoComponent,
    CreergroupeComponent,

  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
