import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cour } from '../models/Cour';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  private apiUrl = 'http://localhost:6060';

  constructor(private http: HttpClient) { }

  getAllCours(): Observable<Cour[]> {
    return this.http.get<Cour[]>(`${this.apiUrl}/cours`);
  }

  getCourById(id: number): Observable<Cour> {
    return this.http.get<Cour>(`${this.apiUrl}/cours/${id}`);
  }

  createCour(cour: Cour): Observable<Cour> {
    return this.http.post<Cour>(`${this.apiUrl}/cours`, cour);
  }

  updateCour(cour: Cour): Observable<Cour> {
    return this.http.put<Cour>(`${this.apiUrl}/cours/${cour.id}`, cour);
  }

  deleteCour(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cours/${id}`);
  }
  downloadExcel(beneficiaires: Cour[]): Observable<Blob> {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(beneficiaires);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    return new Observable((observer) => {
      observer.next(blob);
      observer.complete();
    });

    
}
}
