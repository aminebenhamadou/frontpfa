import { Component, OnInit } from '@angular/core';
import { Cour } from '../../models/Cour';
import { CourService } from '../../services/CourService';

@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.css']
})
export class CourComponent implements OnInit {
searchCoursById($event: Event) {
throw new Error('Method not implemented.');
}
    cours: Cour[] = [];
    filteredCours: Cour[] = [];
  
    constructor(private courService: CourService) {}
  
    ngOnInit(): void {
      this.getAllCours();
    }
  
    getAllCours(): void {
      this.courService.getAllCours().subscribe(
        (cours: Cour[]) => {
          this.cours = cours;
          this.filteredCours = [...this.cours];
        },
        (error) => {
          console.error('Error fetching cours: ', error);
        }
      );
    }
  
    onDelete(id: number): void {
      // Show confirmation dialog before deleting
      if (confirm('Are you sure you want to delete this cour ?')) {
        // Call service method to delete cour
        this.courService.deleteCour(id).subscribe(  
          () => {
            console.log('Cour deleted successfully');
            // Refresh cour list after deletion
            this.getAllCours();
          },
          (error) => {
            console.error('Error deleting cour:', error);
          }
        );
      }
    }
    downloadExcel(): void {
      this.courService.downloadExcel(this.cours).subscribe(
        (data) => {
          const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'cours.xlsx';
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