import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-etd',
  templateUrl: './dashboard-etd.component.html',
  styleUrls: ['./dashboard-etd.component.css']
})
export class DashboardEtdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createCharts();
  }

  createCharts() {
    // Chart 1: Tasks Overview (Pie Chart)
    new Chart('tasksOverviewChart', {
      type: 'pie',
      data: {
        labels: ['To Do', 'In Progress', 'Done'],
        datasets: [{
          label: 'Task Status',
          data: [10, 5, 15], // Replace with your dynamic data
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
      }
    });

    // Chart 2: Task Complexity (Bar Chart)
    new Chart('taskComplexityChart', {
      type: 'bar',
      data: {
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [{
          label: 'Task Complexity',
          data: [5, 12, 8], // Replace with your dynamic data
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Chart 3: Time Spent by Subject (Doughnut Chart)
    new Chart('timeSpentSubjectsChart', {
      type: 'doughnut',
      data: {
        labels: ['Web Development', 'Mobile Development', 'Database Management'],
        datasets: [{
          label: 'Time Spent by Subject',
          data: [30, 45, 25], // Replace with your dynamic data
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
      }
    });

    // Chart 4: Time Spent Weekly (Line Chart)
    new Chart('timeSpentWeeklyChart', {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Time Spent Weekly',
          data: [10, 12, 9, 15], // Replace with your dynamic data
          borderColor: '#FF6384',
          fill: false
        }]
      }
    });
  }

}
