import { Component, AfterViewInit } from '@angular/core';
import { CreerTacheService } from 'src/app/services/creer-tache.service';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';
 // Adjust the import

interface ChartData {
  id: string;
  titre: string;
  description: string;
  type: string;
  labels: string[]; // labels as an array of strings
  donnees: number[]; // donnees as an array of numbers
  couleurs: string[]; // couleurs as an array of strings
}

@Component({
  selector: 'app-dashboard-etd',
  templateUrl: './dashboard-etd.component.html',
  styleUrls: ['./dashboard-etd.component.css'],
})
export class DashboardEtdComponent implements AfterViewInit {
  charts: ChartData[] = [
    {
      id: 'timeSpentChart',
      titre: 'Taches par Matiére',
      description: 'Nombre des taches pour chaque matiere',
      type: 'doughnut',
      labels: [],  // Will be populated dynamically
      donnees: [],  // Will be populated dynamically
      couleurs: [],  // Will be populated dynamically
    },
  ];

  constructor(
    private etudiantService: EtudiantServiceService, // Inject the service to fetch data
    private tacheService: CreerTacheService // Inject the task service
  ) {}

  ngAfterViewInit() {
    this.fetchAndPrepareChartData();
  }

  fetchAndPrepareChartData() {
    // Fetch the tasks and matieres (subjects) for the current student or all students
    this.tacheService.getTaches().subscribe((tasks) => {
      const matiereCounts: { [key: string]: number } = {}; // To store count of tasks per subject

      tasks.forEach((task) => {
        const matiereLabel = task.matiere.libelle;
        if (!matiereCounts[matiereLabel]) {
          matiereCounts[matiereLabel] = 0;
        }
        matiereCounts[matiereLabel]++;
      });

      // Prepare data for the chart
      const labels = Object.keys(matiereCounts);
      const donnees = Object.values(matiereCounts);
      const couleurs = this.generateRandomColors(labels.length);

      // Update chart data
      this.charts[0].labels = labels;
      this.charts[0].donnees = donnees;
      this.charts[0].couleurs = couleurs;

      this.renderGraphique(this.charts[0]);
    });
  }

  // Helper function to generate random colors for the chart
  generateRandomColors(count: number): string[] {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
    return colors;
  }

  renderGraphique(graphique: ChartData) {
    const canvas = <HTMLCanvasElement>document.getElementById(graphique.id);
    const ctx = canvas.getContext('2d');

    if (graphique.type === 'doughnut') {
      this.renderDoughnut(ctx, graphique.donnees, graphique.couleurs, graphique.labels); 
    }
  }

  renderDoughnut(ctx: CanvasRenderingContext2D | null, donnees: number[], couleurs: string[], labels: string[]) {
    if (!ctx) return;
    
    const total = donnees.reduce((acc, val) => acc + val, 0);
    let angleDepart = 0;
    const rayonExterieur = 50;
    const rayonInterieur = 30; // Inner radius for doughnut effect
  
    donnees.forEach((valeur, index) => {
      const angleTranche = (valeur / total) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(220, 60); 
      ctx.arc(220, 60, rayonExterieur, angleDepart, angleDepart + angleTranche); 
      ctx.arc(220, 60, rayonInterieur, angleDepart + angleTranche, angleDepart, true); 
      ctx.closePath();
  
      const gradient = ctx.createLinearGradient(160, 0, 160, 240);
      gradient.addColorStop(0, couleurs[index]);
  
      ctx.fillStyle = gradient;
      ctx.fill();
  
      angleDepart += angleTranche;
    });
  
    const labelStartX = 10; 
    const labelStartY = 10;
    const boxSize = 12; 
    const labelSpacing = 20; 
  
    labels.forEach((label, index) => {
      ctx.fillStyle = couleurs[index];
      ctx.fillRect(labelStartX, labelStartY + index * labelSpacing, boxSize, boxSize);
  
      ctx.fillStyle = '#000';
      ctx.font = '14px cursive';
      ctx.fillText(label, labelStartX + boxSize + 5, labelStartY + index * labelSpacing + 10);
    });
  }
}
