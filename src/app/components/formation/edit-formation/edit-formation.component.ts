import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from '../../../models/Formateur';
import { Formation, FormationStatus } from '../../../models/Formation';
import { CourService } from '../../../services/CourService';
import { FormateurService } from '../../../services/FormateurService';
import { FormationService } from '../../../services/FormationService';
import { SalleService } from '../../../services/SalleService';
import { Salle } from '../../../models/Salle';
import { Cour } from '../../../models/Cour';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent implements OnInit {

  formation!: Formation; 
  formationId: number;
  formationStatusValues = Object.values(FormationStatus);
  formateurs: Formateur[] = [];
  cours: Cour[] = [];
  salle: Salle[] = [];

  constructor(
    private formationService: FormationService,
    private formateurService: FormateurService,
    private salleservice: SalleService,
    private coursservice: CourService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.formationId = 0;
  }

  ngOnInit(): void {
    const routeSnapshot = this.route.snapshot;
    if (routeSnapshot) {
      const idParam = routeSnapshot.paramMap.get('id');
      if (idParam) {
        this.formationId = +idParam;
        this.fetchFormation(this.formationId);
      }
    }
    this.fetchFormateurs();
    this.fetchcour();
    this.fetchsalle();
  }

  fetchFormation(formationId: number): void {
    this.formationService.getFormationById(formationId).subscribe(
      (formation) => {
        this.formation = formation;
      },
      (error) => {
        console.error('Error fetching formation:', error);
      }
    );
  }

  fetchFormateurs(): void {
    this.formateurService.getAllFormateurs().subscribe(
      (data: Formateur[]) => {
        this.formateurs = data;
        console.log('Formateurs fetched:', this.formateurs);  // Log to verify data
      },
      (error) => {
        console.error('Error fetching formateurs:', error);
      }
    );
  }

  fetchsalle(): void {
    this.salleservice.getAllSalles().subscribe(
      (data: Salle[]) => {
        this.salle = data;
        console.log('Salles fetched:', this.salle);  // Log to verify data
      },
      (error) => {
        console.error('Error fetching salles:', error);
      }
    );
  }

  fetchcour(): void {
    this.coursservice.getAllCours().subscribe(
      (data: Cour[]) => {
        this.cours = data;
        console.log('Cours fetched:', this.cours);  // Log to verify data
      },
      (error) => {
        console.error('Error fetching cours:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.formation) {
      this.formationService.updateFormation(this.formation).subscribe(
        () => {
          console.log('Formation updated successfully');
          this.router.navigate(['/formation']); 
        },
        (error) => {
          console.error('Error updating formation:', error);
        }
      );
    }
  }
}
