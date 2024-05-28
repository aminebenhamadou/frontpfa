import { Component } from '@angular/core';
import { SalleService } from '../services/SalleService';
import { Salle } from '../models/Salle';
@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent {
searchSallesById($event: Event) {
throw new Error('Method not implemented.');
}
   salles: Salle[] = [];
   filteredsalles: Salle[] = [];

constructor (private salleservice:SalleService) {}
ngOnInit(): void {
  this.getAllSalles();
}

getAllSalles(): void {
  this.salleservice.getAllSalles().subscribe(
    (salles: Salle[]) => {
      this.salles = salles;
      this.filteredsalles = [...this.salles];
    },
    (error) => {
      console.error('Error fetching salles: ', error);
    }
  );
}

onDelete(id: number): void {
  // Show confirmation dialog before deleting
  if (confirm('Are you sure you want to delete this cour ?')) {
    this.salleservice.deleteSalle(id).subscribe(  
      () => {
        console.log('Salle deleted successfully');
        this.getAllSalles();
      },
      (error) => {
        console.error('Error deleting salle:', error);
      }
    );
  }
}

downloadExcel(): void {
  this.salleservice.downloadExcel(this.salles).subscribe(
    (data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'salles.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    },
    (error) => {
      console.error('Error downloading Excel file: ', error);
    }
  );
}
}
