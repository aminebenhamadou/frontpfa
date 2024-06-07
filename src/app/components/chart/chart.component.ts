import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { StatisticsService } from '../../services/statistics.service';
import { BeneficiaireService } from '../../services/BeneficiaireService';
import { FormateurService } from '../../services/FormateurService';
import { FormationService } from '../../services/FormationService';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  cards = [
    { title: 'Students', value: '', icon: 'assets/img/icons/dash-icon-01.svg' },
    { title: 'Teachers', value: '', icon: 'assets/img/icons/dash-icon-02.svg' }
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        }
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data as number[];
          dataArr.forEach(data => {
            sum += data;
          });
          let percentage = (value * 100 / sum).toFixed(2) + "%";
          return percentage;
        },
        color: '#fff',
      }
    }
  };

  public pieChartLabels: string[] = ['Beneficiaries', 'Teachers'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  public pieChartData: ChartData<'pie'> = {
    labels: this.pieChartLabels,
    datasets: [
      { data: [0, 0], label: 'Count' }
    ]
  };

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#e9ecef',
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        }
      }
    }
  };

  public barChartLabels: string[] = ['HOMME', 'FEMME', 'AUTRE'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ['#42A5F5', '#FF6384', '#66BB6A'],
        label: 'Count'
      }
    ]
  };

  public formateurChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#e9ecef',
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        }
      }
    }
  };

  public formateurChartLabels: string[] = [];
  public formateurChartType: ChartType = 'line';
  public formateurChartLegend = true;

  public formateurChartData: ChartData<'line'> = {
    labels: this.formateurChartLabels,
    datasets: [
      {
        data: [],
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        borderColor: '#42A5F5',
        fill: true,
        label: 'Formations Count'
      }
    ]
  };

  public donutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        }
      }
    }
  };

  public donutChartLabels: string[] = [];
  public donutChartType: ChartType = 'doughnut';
  public donutChartLegend = true;

  public donutChartData: ChartData<'doughnut'> = {
    labels: this.donutChartLabels,
    datasets: [
      { data: [], label: 'Formations Count' }
    ]
  };

  constructor(
    private statisticsService: StatisticsService,
    private beneficiaireService: BeneficiaireService,
    private formateurService: FormateurService,
    private formationService: FormationService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.fetchCounts();
    this.fetchBeneficiaireCountsBySexe();
    this.fetchFormationsByTrainers();
    this.fetchFormationsByDescription();
  }

  fetchCounts(): void {
    this.statisticsService.getCounts().subscribe(data => {
      this.pieChartData = {
        labels: this.pieChartLabels,
        datasets: [
          { data: [data.beneficiaires, data.formateurs], label: 'Count' }
        ]
      };
      this.cards = [
        { title: 'Students', value: data.beneficiaires.toString(), icon: 'assets/img/icons/dash-icon-01.svg' },
        { title: 'Teachers', value: data.formateurs.toString(), icon: 'assets/img/icons/dash-icon-02.svg' }
      ];
      this.cdr.detectChanges();
    }, error => {
      console.error('Error fetching data:', error);
    });
  }

  fetchBeneficiaireCountsBySexe(): void {
    this.beneficiaireService.getAllBeneficiaires().subscribe(beneficiaires => {
      const counts = { HOMME: 0, FEMME: 0, AUTRE: 0 };
      beneficiaires.forEach(beneficiaire => {
        counts[beneficiaire.sexe]++;
      });

      this.barChartData = {
        labels: this.barChartLabels,
        datasets: [
          {
            data: [counts.HOMME, counts.FEMME, counts.AUTRE],
            backgroundColor: ['#42A5F5', '#FF6384', '#66BB6A'],
            label: 'Count'
          }
        ]
      };

      this.cdr.detectChanges();
    }, error => {
      console.error('Error fetching beneficiaires:', error);
    });
  }

  fetchFormationsByTrainers(): void {
    this.formationService.getAllFormations().subscribe(formations => {
      const trainerFormationCount: { [key: string]: number } = {};
      const trainerNames: { [key: string]: string } = {};

      formations.forEach(formation => {
        const trainerId = formation.formateur.id;
        const trainerName = `${formation.startDate} `;

        if (!trainerFormationCount[trainerId]) {
          trainerFormationCount[trainerId] = 0;
          trainerNames[trainerId] = trainerName;
        }
        trainerFormationCount[trainerId]++;
      });

      this.formateurChartLabels = Object.values(trainerNames);
      this.formateurChartData = {
        labels: this.formateurChartLabels,
        datasets: [
          {
            data: Object.values(trainerFormationCount),
            backgroundColor: 'rgba(66, 165, 245, 0.2)',
            borderColor: '#42A5F5',
            fill: true,
            label: 'Formations Count'
          }
        ]
      };

      this.cdr.detectChanges();
    }, error => {
      console.error('Error fetching formations:', error);
    });
  }

  fetchFormationsByDescription(): void {
    this.formationService.getAllFormations().subscribe(formations => {
      const descriptionCount: { [key: string]: number } = {};

      formations.forEach(formation => {
        if (!descriptionCount[formation.description]) {
          descriptionCount[formation.description] = 0;
        }
        descriptionCount[formation.description]++;
      });

      this.donutChartLabels = Object.keys(descriptionCount);
      this.donutChartData = {
        labels: this.donutChartLabels,
        datasets: [
          { data: Object.values(descriptionCount), backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A', '#FFA726'] }
        ]
      };

      this.cdr.detectChanges();
    }, error => {
      console.error('Error fetching formations by description:', error);
    });
  }
}
