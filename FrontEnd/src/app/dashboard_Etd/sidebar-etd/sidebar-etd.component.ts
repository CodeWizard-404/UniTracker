import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-etd',
  templateUrl: './sidebar-etd.component.html',
  styleUrls: ['./sidebar-etd.component.css']
})
export class SidebarEtdComponent implements OnInit{
  idEtudiant!:number;
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.idEtudiant = Number(this.route.snapshot.paramMap.get('id'));
  }
}
