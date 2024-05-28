import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificat } from '../models/Certificat';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class CertificatService {

  private apiUrl = 'http://localhost:6060/certificats';

  constructor(private http: HttpClient) { }

  getAllCertificats(): Observable<Certificat[]> {
    return this.http.get<Certificat[]>(this.apiUrl);
  }

  getCertificatById(id: number): Observable<Certificat> {
    return this.http.get<Certificat>(`${this.apiUrl}/${id}`);
  }

  createCertificat(certificat: Certificat): Observable<Certificat> {
    return this.http.post<Certificat>(this.apiUrl, certificat);
  }

  updateCertificat(id: number, certificat: Certificat): Observable<Certificat> {
    return this.http.put<Certificat>(`${this.apiUrl}/${id}`, certificat);
  }

  deleteCertificat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  downloadExcel(beneficiaires: Certificat[]): Observable<Blob> {
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
