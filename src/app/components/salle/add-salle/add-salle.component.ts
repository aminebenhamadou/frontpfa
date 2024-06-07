import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Salle } from '../../../models/Salle';
import { SalleService } from '../../../services/SalleService';
@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css']
})
export class AddSalleComponent {
  form!: FormGroup;
  newSalle: Salle = {} as Salle;

  constructor(
    private salleservice: SalleService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.newSalle.name = this.form.value.name; // Utiliser 'name' au lieu de 'title'

      this.salleservice.createSalle(this.newSalle).subscribe(
        (res: any) => {
          console.log('Salle ajoutée avec succès :', res);
          this.resetForm();
          this.router.navigate(['/salle']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la salle :', error);
          // Gérer l'erreur ici
        }
      );
    }
  }

  resetForm(): void {
    this.form.reset();
  }
}
