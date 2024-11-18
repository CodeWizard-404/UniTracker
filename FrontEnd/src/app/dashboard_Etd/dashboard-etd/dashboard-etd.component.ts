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
      couleurs: ['#2786e8', '#73b4e8', '#0e4178'],
    },
    {
      id: 'tasksComplexityChart',
      titre: 'Complexité des tâches',
      description: 'Catégories de complexité à travers les modules.',
      type: 'barres',
      labels: ['Web', 'Mobile', 'NodeJS', 'SOA', 'Flutter', 'Big Data'],
      ensemblesDonnees: [
        { label: 'Facile', donnees: [10, 15, 20, 25, 30, 35], couleur: '#2786e8' },
        { label: 'Moyenne', donnees: [20, 25, 30, 35, 40, 45], couleur: '#73b4e8' },
        { label: 'Difficile', donnees: [30, 35, 40, 45, 50, 55], couleur: '#0e4178' },
      ],
    },
    {
      id: 'timeSpentChart',
      titre: 'Temps passé sur les matières',
      description: 'Répartition des domaines par allocation du temps.',
      type: 'doughnut', // Change type to 'doughnut'
      labels: ['Web', 'Mobile', 'Flutter', 'Django', 'Angular'],
      donnees: [30, 20, 15, 10, 25],
      couleurs: ['#2786e8', '#73b4e8', '#0e4178', '#85659e', '#cea9bc'],
    },
    {
      id: 'timeSpentDaysChart',
      titre: 'Répartition du temps hebdomadaire',
      description: 'Comment le temps est réparti tout au long de la semaine.',
      type: 'stackedColumn', // Change type to 'stackedColumn'
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      ensemblesDonnees: [
        { label: 'Temps', donnees: [20, 30, 45, 20, 35, 30, 20], couleur: '#2786e8' },
        { label: 'Moyenne', donnees: [35, 50, 40, 30, 25, 30, 30], couleur: '#73b4e8' },
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
    } else if (graphique.type === 'stackedColumn') {
      this.renderStackedColumn(ctx, graphique.labels, graphique.ensemblesDonnees); // Call renderStackedColumn for the last chart
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

  renderBarres(ctx: CanvasRenderingContext2D | null, labels: string[], ensemblesDonnees: any[]) {
    if (!ctx) return;

    const hauteurBarre = 10; // Bar height
    const espacementBarre = 9; // Reduced bar spacing
    const yDepart = 10; // Starting Y position for the first bar
    const maxWidth = 300; // Maximum width for the bars

    labels.forEach((label, index) => {
        let yOffset = yDepart + index * (hauteurBarre + espacementBarre); // Position each bar vertically
        let currentX = 90; // Start from the left edge for each bar

        ensemblesDonnees.forEach((ensemble) => {
            // Create gradient for each section of the stacked bar
            const gradient = ctx.createLinearGradient(currentX, yOffset, currentX + ensemble.donnees[index] * 2, yOffset);
            gradient.addColorStop(0, ensemble.couleur);

            // Draw the rectangle for each section of the stacked bar
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.roundRect(currentX, yOffset, ensemble.donnees[index] * 2, hauteurBarre, 3);
            ctx.fill();

            // Update the currentX to stack the next bar segment horizontally
            currentX += ensemble.donnees[index] * 2;
        });

        // Add label next to the bar
        ctx.fillStyle = '#6c757d';
        ctx.font = '14px cursive';
        ctx.fillText(label, 10, yOffset + hauteurBarre / 1.5);
    });

    // Add labels with color indicators for 'Facile', 'Moyenne', 'Difficile' (from ensemblesDonnees)
    const labelStartX = 320; // X position for labels on the side
    const labelStartY = 10; // Y position to start the list of labels
    const boxSize = 12; // Size of the color indicator box
    const labelSpacing = 20; // Space between each label and box

    ensemblesDonnees.forEach((ensemble, index) => {
        // Draw the color box next to the label
        ctx.fillStyle = ensemble.couleur;
        ctx.fillRect(labelStartX, labelStartY + index * labelSpacing, boxSize, boxSize);

        // Draw the label text (Facile, Moyenne, Difficile) next to the color box
        ctx.fillStyle = '#000';
        ctx.font = '14px cursive';
        ctx.fillText(ensemble.label, labelStartX + boxSize + 5, labelStartY + index * labelSpacing + 10);
    });
}

  renderStackedColumn(ctx: CanvasRenderingContext2D | null, labels: string[], ensemblesDonnees: any[]) {
    if (!ctx) return;

    const columnWidth = 20; // Width of each column
    const columnSpacing = 10; // Space between columns
    const maxHeight = 100; // Max height for columns
    const yStart = 10; // Starting Y position for the first column
    const barBorderRadius = 5; // Radius for rounded corners

    labels.forEach((label, index) => {
        let currentY = maxHeight; // Start from the top for each column

        ensemblesDonnees.forEach((ensemble) => {
            const barHeight = ensemble.donnees[index];
            const gradient = ctx.createLinearGradient(0, currentY, 0, currentY - barHeight);
            gradient.addColorStop(0, ensemble.couleur);

            // Draw each section of the column with rounded corners
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.roundRect(40 + index * (columnWidth + columnSpacing), currentY - barHeight, columnWidth, barHeight, barBorderRadius);
            ctx.fill();

            // Update currentY to stack the next column segment vertically
            currentY -= barHeight;
        });

        // Add label below each column
        ctx.fillStyle = '#6c757d';
        ctx.font = '14px cursive';
        ctx.fillText(label, 40 + index * (columnWidth + columnSpacing), yStart + maxHeight + 10);
    });

    // Add labels with color indicators on the side
    const labelStartX = 320; // X position for labels on the side
    const labelStartY = 10; // Y position to start the list of labels
    const boxSize = 12; // Size of the color indicator box
    const labelSpacing = 20; // Space between each label and box
  
// Update the labels for stacked columns
ensemblesDonnees.forEach((ensemble, index) => {
  // Draw the color box next to the label
  ctx.fillStyle = ensemble.couleur;
  ctx.fillRect(labelStartX, labelStartY + index * labelSpacing, boxSize, boxSize);

  // Update the label text for 'Moyenne' and 'Votre temps'
  ctx.fillStyle = '#000';
  ctx.font = '14px cursive';
  ctx.fillText(ensemble.label, labelStartX + boxSize + 5, labelStartY + index * labelSpacing + 10);
});

}

}
