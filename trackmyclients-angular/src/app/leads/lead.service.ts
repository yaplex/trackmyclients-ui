import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lead } from './lead.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  configApiUri = 'https://localhost:5001';
  constructor(private http: HttpClient) { }
  
  createNew(lead: Lead): Observable<Lead> {
    return this.http.post<Lead>(`${this.configApiUri}/Leads`, lead);
  }
}
