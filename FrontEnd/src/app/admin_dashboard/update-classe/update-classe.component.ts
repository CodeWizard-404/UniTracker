import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from 'src/app/classes/classe';
import { Matiere } from 'src/app/classes/matiere';
import { ClasseServiceService } from 'src/app/services/classe-service.service';
import { MatiereServiceService } from 'src/app/services/matiere-service.service';

@Component({
  selector: 'app-update-classe',
  templateUrl: './update-classe.component.html',
  styleUrls: ['./update-classe.component.css']
})
export class UpdateClasseComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}