import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur';
import { Formation, FormationStatus } from 'src/app/models/Formation';
import { FormateurService } from 'src/app/services/FormateurService';
import { FormationService } from 'src/app/services/FormationService';
@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent implements OnInit {


  formation!: Formation; 
  formationId: number;
  formationStatusValues = Object.values(FormationStatus) ;
  formateurs: Formateur[] = [];

  constructor(
    private formationService: FormationService,
    private formateurService: FormateurService,
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
    this.fetchFormateurs(); // Call the fetchFormateurs method here
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
  fetchFormateurs() {
    // Call the service method to fetch formateurs
    this.formateurService.getAllFormateurs().subscribe(
        (data: Formateur[]) => {
            this.formateurs = data;
        },
        (error) => {
            console.error('Error fetching formateurs:', error);
        }
    );
}
  onSubmit(): void {
    if (this.formation) {
      this.formationService.updateFormation(this.formation).subscribe(
        () => {
          console.log('formation updated successfully');
          this.router.navigate(['/formation']); 
        },
        (error) => {
          console.error('Error updating formation:', error);
        }
      );
    }
  }
}
