import { Component, OnInit } from '@angular/core';
import { Prof } from 'src/app/classes/prof';
import { ProfServiceService } from 'src/app/services/prof-service.service';

@Component({
  selector: 'app-listes-prof',
  templateUrl: './listes-prof.component.html',
  styleUrls: ['./listes-prof.component.css']
})
export class ListesProfComponent implements  OnInit {
  profs:Prof[]=[];

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
  
}
