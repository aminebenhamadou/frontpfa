import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private apiUrl = 'http://localhost:6060/statistics/counts';

  constructor(private http: HttpClient) { }

  getCounts(): Observable<{ beneficiaires: number, formateurs: number }> {
    return this.http.get<{ beneficiaires: number, formateurs: number }>(this.apiUrl);
  }
}
