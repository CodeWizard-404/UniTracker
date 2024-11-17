import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-etd',
  templateUrl: './dashboard-etd.component.html',
  styleUrls: ['./dashboard-etd.component.css'],
})
export class DashboardEtdComponent implements AfterViewInit {
  charts = [
    {
      id: 'tasksOverviewChart',
      titre: 'Aperçu des tâches',
      description: 'Une répartition des tâches par statut.',
      type: 'doughnut', // Change type to 'doughnut'
      labels: ['To Do', 'In Progress', 'Done'],
      donnees: [30, 30, 40],
      couleurs: ['#f4a261', '#2a9d8f', '#264653'],
    },
    {
      id: 'tasksComplexityChart',
      titre: 'Complexité des tâches',
      description: 'Catégories de complexité à travers les modules.',
      type: 'barres',
      labels: ['Web', 'Mobile', 'NodeJS', 'SOA', 'Flutter', 'Big Data'],
      ensemblesDonnees: [
        { label: 'Facile', donnees: [10, 15, 20, 25, 30, 35], couleur: '#e76f51' },
        { label: 'Moyenne', donnees: [20, 25, 30, 35, 40, 45], couleur: '#f4a261' },
        { label: 'Difficile', donnees: [30, 35, 40, 45, 50, 55], couleur: '#264653' },
      ],
    },
    {
      id: 'timeSpentChart',
      titre: 'Temps passé sur les matières',
      description: 'Répartition des domaines par allocation du temps.',
      type: 'doughnut', // Change type to 'doughnut'
      labels: ['Web', 'Mobile', 'Flutter', 'Django', 'Angular'],
      donnees: [30, 20, 15, 10, 25],
      couleurs: ['#f4a261', '#2a9d8f', '#264653', '#e9c46a', '#e76f51'],
    },
    {
      id: 'timeSpentDaysChart',
      titre: 'Répartition du temps hebdomadaire',
      description: 'Comment le temps est réparti tout au long de la semaine.',
      type: 'barres',
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      ensemblesDonnees: [
        { label: 'Votre temps', donnees: [5, 8, 6, 10, 7, 12, 9], couleur: '#2a9d8f' },
        { label: 'Moyenne', donnees: [6, 7, 8, 9, 10, 11, 12], couleur: '#264653' },
      ],
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
    } else if (graphique.type === 'barres') {
      this.renderBarres(ctx, graphique.labels, graphique.ensemblesDonnees);
    }
  }

  renderDoughnut(ctx: CanvasRenderingContext2D | null, donnees: number[], couleurs: string[], labels: string[]) {
    if (!ctx) return;
    
    const total = donnees.reduce((acc, val) => acc + val, 0);
    let angleDepart = 0;
    const rayonExterieur = 80;
    const rayonInterieur = 50; // Inner radius for doughnut effect
  
    // Draw the doughnut chart
    donnees.forEach((valeur, index) => {
      const angleTranche = (valeur / total) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(260, 100); // Centre of the canvas
      ctx.arc(260, 100, rayonExterieur, angleDepart, angleDepart + angleTranche); // Outer arc
      ctx.arc(260, 100, rayonInterieur, angleDepart + angleTranche, angleDepart, true); // Inner arc to create hole
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
    const labelSpacing = 30; // Space between each label and box
  
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
  
  renderBarres(ctx: CanvasRenderingContext2D | null, labels: string[], ensemblesDonnees: any[]) {
    if (!ctx) return;
    const hauteurBarre = 20; // Bar height
    const espacementBarre = 10; // Reduced bar spacing
    const yDepart = 10; // Starting Y position for the first bar
    const maxWidth = 400; // Maximum width for the bars
  
    labels.forEach((label, index) => {
      let yOffset = yDepart + index * (hauteurBarre + espacementBarre); // Position each bar vertically
      let currentX = 100; // Start from the left edge for each bar
  
      ensemblesDonnees.forEach((ensemble) => {
        // Create gradient for each section of the stacked bar
        const gradient = ctx.createLinearGradient(currentX, yOffset, currentX + ensemble.donnees[index] * 2, yOffset);
        gradient.addColorStop(0, ensemble.couleur);
  
        // Draw the rectangle for each section of the stacked bar
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(currentX, yOffset, ensemble.donnees[index] * 2, hauteurBarre, 10);
        ctx.fill();
  
        // Update the currentX to stack the next bar segment horizontally
        currentX += ensemble.donnees[index] * 2;
      });
  
      // Add label next to the bar
      ctx.fillStyle = '#6c757d';
      ctx.font = '14px cursive';
      ctx.fillText(label, 10, yOffset + hauteurBarre / 1.5);
    });
  }
  
  
}
