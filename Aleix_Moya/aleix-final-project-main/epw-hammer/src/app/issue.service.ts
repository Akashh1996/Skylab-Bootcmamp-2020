/* eslint-disable no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gun } from './home';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  endpoint = 'http://localhost:5000' || 'http://192.168.1.51:5000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  // eslint-disable-next-line no-unused-vars
  constructor(private http: HttpClient) { }

  guns$!: Observable<Gun[]>

  selectedFaction:string=''

  getSelectedFaction() {
    return this.selectedFaction;
  }

  setSelectedFaction(value:string) {
    this.selectedFaction = value;
  }

  getIssues(gunModel:string = 'Astartes'): Observable<Gun[]> {
    return this.http.get<Gun[]>(`${this.endpoint}/${gunModel}`);
  }

  getIssueById(id: any) {
    return this.http.get<Gun>(`${this.endpoint}/${id}`);
  }

  deleteIssue(id: any) {
    return this.http.get(`${this.endpoint}/issues/delete/${id}`);
  }
}
