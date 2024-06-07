import { Component, OnInit } from '@angular/core';
import { Formation } from '../../models/Formation';
import { FormationService } from '../../services/FormationService';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations: Formation[] = [];
  filteredFormations: Formation[] = [];

  constructor(private FormationService: FormationService) {}

  ngOnInit(): void {
    this.getAllFormations();
  }

  getAllFormations(): void {
    this.FormationService.getAllFormations().subscribe(
      (formations: Formation[]) => {
        this.formations = formations;
        this.filteredFormations = [...this.formations];
      },
      (error) => {
        console.error('Error fetching formations: ', error);
      }
    );
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this formation?')) {
      this.FormationService.deleteFormation(id).subscribe(
        () => {
          console.log('Formation deleted successfully');
          this.getAllFormations();
        },
        (error) => {
          console.error('Error deleting formation:', error);
        }
      );
    }
  }

  downloadExcel(): void {
    this.FormationService.downloadExcel(this.formations).subscribe(
      (data) => {
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'formations.xlsx';
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

  searchFormationsById(event: Event): void {
    const target = event.target as HTMLInputElement;
    const id = target.value;
    this.filteredFormations = this.formations.filter(
      (formation) => formation.id.toString().toLowerCase().includes(id.toLowerCase())
    );
  }

  searchformationsByFormateur(event: Event): void {
    const target = event.target as HTMLInputElement;
    const name = target.value;
    this.filteredFormations = this.formations.filter(
      (formation) => formation.formateur.firstName.toLowerCase().includes(name.toLowerCase()) ||
        formation.formateur.lastName.toLowerCase().includes(name.toLowerCase())
    );
  }
}
