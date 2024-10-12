import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-prof',
  templateUrl: './sidebar-prof.component.html',
  styleUrls: ['./sidebar-prof.component.css']
})
export class SidebarProfComponent implements OnInit{
  idProf!:number;
  constructor(private route:ActivatedRoute){}
ngOnInit(): void {
  this.idProf = Number(this.route.snapshot.paramMap.get('id'));

}
}
