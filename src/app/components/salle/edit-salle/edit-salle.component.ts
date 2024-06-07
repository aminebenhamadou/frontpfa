import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salle} from '../../../models/Salle';
import { SalleService } from '../../../services/SalleService';

@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.css']
})
export class EditSalleComponent implements OnInit {
  salle!: Salle;
  salleId: number;

  constructor(
    private salleService: SalleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.salleId = 0;
  }

  ngOnInit(): void {
    const routeSnapshot = this.route.snapshot;
    if (routeSnapshot) {
      const idParam = routeSnapshot.paramMap.get('id');
      if (idParam) {
        this.salleId = +idParam;
        this.fetchCour(this.salleId);
      }
    }
  }

  fetchCour(salleId: number): void {
    this.salleService.getSalleById(salleId).subscribe(
      (salle) => {
        this.salle = salle;
      },
      (error) => {
        console.error('Error fetching salle:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.salle) {
      this.salleService.updateSalle (this.salle).subscribe(
        () => {
          console.log('Cour updated successfully');
          this.router.navigate(['/salle']);
        },
        (error) => {
          console.error('Error updating salle:', error);
        }
      );
    }
  }
}
