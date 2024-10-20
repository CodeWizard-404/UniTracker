import { Component, OnInit } from '@angular/core';
import { Matiere } from 'src/app/classes/matiere';
import { Prof } from 'src/app/classes/prof';
import { ProfServiceService } from 'src/app/services/prof-service.service';

@Component({
  selector: 'app-listes-prof',
  templateUrl: './listes-prof.component.html',
  styleUrls: ['./listes-prof.component.css']
})
export class ListesProfComponent implements  OnInit {
  profs:Prof[]=[];
  Matieres: Matiere[] = [];


  constructor(private profService:ProfServiceService){}
ngOnInit(): void {
  this.loadProf();
}

loadProf(){
  this.profService.getProfesseurs().subscribe(data=>{
    this.profs=data;
  }, error => {
    console.error('Erreur lors du chargement des profs', error);
  });
}

getMatieresNames(prof: Prof): string {
  if (prof.lesMatieres && prof.lesMatieres.length > 0) {
    const uniqueMatieres = new Set<string>();

    prof.lesMatieres.forEach(m => {
      uniqueMatieres.add(m.libelle); 
    });

    return Array.from(uniqueMatieres).join(", ");
  }
  return "Aucune matière"; 
}

getClassesNames(prof: Prof): string {
  if (prof.lesMatieres && prof.lesMatieres.length > 0) {
    const uniqueClasses = new Set<string>();

    prof.lesMatieres.forEach(m => {
      if (m.classes && m.classes.length > 0) {
        m.classes.forEach(cls => {
          uniqueClasses.add(cls.nom_Classe); 
        });
      }
    });

    return Array.from(uniqueClasses).join(", ");
  }
  return "Aucune classe"; 
}

getGroupedClassesByYear(prof: Prof): string {
  if (prof.lesMatieres && prof.lesMatieres.length > 0) {
    const groupedClasses = new Map<number, Set<number>>();

    prof.lesMatieres.forEach(m => {
      if (m.classes && m.classes.length > 0) {
        m.classes.forEach(cls => {
          if (!groupedClasses.has(cls.annee_Classe)) {
            groupedClasses.set(cls.annee_Classe, new Set<number>());
          }
          groupedClasses.get(cls.annee_Classe)?.add(cls.num_Classe);
        });
      }
    });

    const result: string[] = [];
    groupedClasses.forEach((classNumbers, year) => {
      const yearLabel = year === 1 ? '1er' : `${year}eme`;
      result.push(`${yearLabel}: ${Array.from(classNumbers).sort().join(",")}`);
    });

    return result.join(" / ");
  }
  return "Aucune classe";
}


  
}
