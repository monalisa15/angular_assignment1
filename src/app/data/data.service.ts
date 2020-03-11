import { Injectable } from '@angular/core';
import { employee } from './employee.model';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :HttpClient) {}
  getQualification(): Observable<string[]> {
    return of(['B.Tech', 'MCA', 'MBA','M.Tech','BCA']);
  }
  getExperience(): Observable<string[]> {
    return of(['0', '1', '2', '3', '4', '5']);
  }
}
