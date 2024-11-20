import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fight } from '../models/fight';

@Injectable({
  providedIn: 'root'
})
export class FightService {

  private apiUrl = `${environment.apiUrl}/fight`
  
  constructor(private http: HttpClient) { }

  createFight(fight: Fight): Observable<Fight> {
    return this.http.post<Fight>(this.apiUrl, fight);
  }
}
