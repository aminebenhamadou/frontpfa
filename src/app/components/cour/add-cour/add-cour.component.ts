import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cour } from '../../../models/Cour';
import { CourService } from '../../../services/CourService';

@Component({
  selector: 'app-add-cour',
  templateUrl: './add-cour.component.html',
  styleUrls: ['./add-cour.component.css']
})
export class AddCourComponent implements OnInit {
  form!: FormGroup;
  newCour: Cour = {} as Cour;

  constructor(
    private courService: CourService,
    private router: Router,
    private fb: FormBuilder // FormBuilder is correctly injected
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.newCour.title = this.form.value.title;
      this.newCour.description = this.form.value.description;

      this.courService.createCour(this.newCour).subscribe(
        (res: any) => {
          console.log('Cours ajouté avec succès :', res);
          this.resetForm();
          this.router.navigate(['/cour']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du cours :', error);
        }
      );
    }
  }

  resetForm(): void {
    this.form.reset();
  }
}
