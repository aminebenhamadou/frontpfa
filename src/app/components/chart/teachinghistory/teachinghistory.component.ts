import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormationService } from '../../../services/FormationService'; 
import { Formation } from '../../../models/Formation';

@Component({
  selector: 'app-teachinghistory',
  templateUrl: './teachinghistory.component.html',
  styleUrls: ['./teachinghistory.component.css']
})
export class TeachingHistoryComponent implements OnInit {
  formations: Formation[] = [];

  constructor(
    private formationService: FormationService, 
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAllFormations();
  }

  getAllFormations(): void {
    this.formationService.getAllFormations().subscribe(
      (formations: Formation[]) => {
        this.formations = formations;
        this.cdr.detectChanges(); 
      },
      (error) => {
        console.error('Error fetching formations: ', error);
      }
    );
  }
}
