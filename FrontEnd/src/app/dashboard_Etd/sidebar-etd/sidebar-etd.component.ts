import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'app-sidebar-etd',
  templateUrl: './sidebar-etd.component.html',
  styleUrls: ['./sidebar-etd.component.css']
})
export class SidebarEtdComponent implements OnInit{
  idEtudiant!:number;
  name!: string;
  constructor(private route:ActivatedRoute, private etudiantServ: EtudiantServiceService){}
  ngOnInit(): void {
    this.idEtudiant = Number(this.route.snapshot.paramMap.get('id'));
    this.etudiantServ.getEtudiantById(this.idEtudiant).subscribe(
      (response) => {
        console.log('prof', response);
        this.name = response.nom_Etd + ' ' + response.prenom_Etd;
  
      },
      (error) => {
        console.error('Erreur', error);
     
      }
    );
  }
}
