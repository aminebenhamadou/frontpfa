import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cour } from '../../../models/Cour';
import { CourService } from '../../../services/CourService';

@Component({
  selector: 'app-edit-cour',
  templateUrl: './edit-cour.component.html',
  styleUrls: ['./edit-cour.component.css']
})
export class EditCourComponent implements OnInit {
  cour!: Cour;
  courId: number;

  constructor(
    private courService: CourService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.courId = 0;
  }

  ngOnInit(): void {
    const routeSnapshot = this.route.snapshot;
    if (routeSnapshot) {
      const idParam = routeSnapshot.paramMap.get('id');
      if (idParam) {
        this.courId = +idParam;
        this.fetchCour(this.courId);
      }
    }
  }

  fetchCour(courId: number): void {
    this.courService.getCourById(courId).subscribe(
      (cour) => {
        this.cour = cour;
      },
      (error) => {
        console.error('Error fetching cour:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.cour) {
      this.courService.updateCour(this.cour).subscribe(
        () => {
          console.log('Cour updated successfully');
          this.router.navigate(['/cour']);
        },
        (error) => {
          console.error('Error updating cour:', error);
        }
      );
    }
  }
}
