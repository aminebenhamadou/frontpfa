import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formation } from '../../../models/Formation';
import { FormationService } from '../../../services/FormationService';
import { Formateur } from '../../../models/Formateur';
import { FormateurService } from '../../../services/FormateurService';
import { SalleService } from '../../../services/SalleService';
import { Salle } from '../../../models/Salle';
import { Cour } from '../../../models/Cour';
import { CourService } from '../../../services/CourService';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  form!: FormGroup;
  formateurs: Formateur[] = [];
  cours: Cour[] = [];
  salles: Salle[] = [];

  constructor(
    private formationService: FormationService,
    private formateurService: FormateurService,
    private salleService: SalleService,
    private courService: CourService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      formateur: ['', Validators.required],
      cours: ['', Validators.required],
      salle: ['', Validators.required]
    });

    this.loadData();
  }

  loadData(): void {
    this.formateurService.getAllFormateurs().subscribe(
      formateurs => this.formateurs = formateurs,
      error => console.error('Error fetching formateurs:', error)
    );

    this.courService.getAllCours().subscribe(
      cours => this.cours = cours,
      error => console.error('Error fetching cours:', error)
    );

    this.salleService.getAllSalles().subscribe(
      salles => this.salles = salles,
      error => console.error('Error fetching salles:', error)
    );
  }

  onSubmit(): void {
    if (this.form.valid) {
      const newFormation: Formation = {
        ...this.form.value,
        cour: this.form.value.cours, // Ensure this matches the form control name
        salle: this.form.value.salle // Ensure this matches the form control name
      };
      this.formationService.addFormation(newFormation).subscribe(
        (res: any) => {
          console.log('Formation added successfully:', res);
          this.resetForm();
          this.router.navigate(['/formation']);
        },
        (error) => {
          console.error('Error adding formation:', error);
        }
      );
    }
  }
  
  resetForm(): void {
    this.form.reset();
  }
}
