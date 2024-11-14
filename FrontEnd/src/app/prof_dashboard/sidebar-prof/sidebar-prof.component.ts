import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfServiceService } from 'src/app/services/prof-service.service';

@Component({
  selector: 'app-sidebar-prof',
  templateUrl: './sidebar-prof.component.html',
  styleUrls: ['./sidebar-prof.component.css']
})
export class SidebarProfComponent implements OnInit{
  idProf!:number;
  constructor(private route:ActivatedRoute, private profServ: ProfServiceService){}
  name!:string;
ngOnInit(): void {
  this.idProf = Number(this.route.snapshot.paramMap.get('id'));
  this.profServ.getProf(this.idProf).subscribe(
    (response) => {
      console.log('prof', response);
      this.name = response.nom_Prof + ' ' + response.prenom_Prof;

    },
    (error) => {
      console.error('Erreur', error);
   
    }
  );
}
}
