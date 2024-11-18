import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-etd',
  templateUrl: './dashboard-etd.component.html',
  styleUrls: ['./dashboard-etd.component.css'],
})
export class DashboardEtdComponent implements AfterViewInit {
  charts = [
    {
      id: 'timeSpentChart',
      titre: 'Taches par Matiére',
      description: 'Nombre des taches pour chaque matiere',
      type: 'doughnut',
      labels: ['Web', 'Mobile', 'Flutter', 'Django', 'Angular'],
      donnees: [30, 20, 15, 10, 25],
      couleurs: ['#2786e8', '#73b4e8', '#0e4178', '#85659e', '#cea9bc'],
    },

  ];

  ngAfterViewInit() {
    this.charts.forEach((graphique) => this.renderGraphique(graphique));
  }

  renderGraphique(graphique: any) {
    const canvas = <HTMLCanvasElement>document.getElementById(graphique.id);
    const ctx = canvas.getContext('2d');

    if (graphique.type === 'doughnut') {
      this.renderDoughnut(ctx, graphique.donnees, graphique.couleurs, graphique.labels); // Call renderDoughnut for doughnut chart
    }
  }

  renderDoughnut(ctx: CanvasRenderingContext2D | null, donnees: number[], couleurs: string[], labels: string[]) {
    if (!ctx) return;
    
    const total = donnees.reduce((acc, val) => acc + val, 0);
    let angleDepart = 0;
    const rayonExterieur = 50;
    const rayonInterieur = 30; // Inner radius for doughnut effect
  
    // Draw the doughnut chart
    donnees.forEach((valeur, index) => {
      const angleTranche = (valeur / total) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(220, 60); // Centre of the canvas
      ctx.arc(220, 60, rayonExterieur, angleDepart, angleDepart + angleTranche); // Outer arc
      ctx.arc(220, 60, rayonInterieur, angleDepart + angleTranche, angleDepart, true); // Inner arc to create hole
      ctx.closePath();
  
      // Create gradient for filling
      const gradient = ctx.createLinearGradient(160, 0, 160, 240);
      gradient.addColorStop(0, couleurs[index]);
  
      ctx.fillStyle = gradient;
      ctx.fill();
  
      angleDepart += angleTranche;
    });
  
    // Add labels with color indicators on the side
    const labelStartX = 10; // X position for labels on the side
    const labelStartY = 10; // Y position to start the list of labels
    const boxSize = 12; // Size of the color indicator box
    const labelSpacing = 20; // Space between each label and box
  
    labels.forEach((label, index) => {
      // Draw the color box next to the label
      ctx.fillStyle = couleurs[index];
      ctx.fillRect(labelStartX, labelStartY + index * labelSpacing, boxSize, boxSize);
  
      // Draw the label text next to the color box
      ctx.fillStyle = '#000';
      ctx.font = '14px cursive';
      ctx.fillText(label, labelStartX + boxSize + 5, labelStartY + index * labelSpacing + 10);
    });
  }




}



