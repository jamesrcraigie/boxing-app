import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { Gym } from '../models/gym';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  private apiUrl = `${environment.apiUrl}/gym`

  constructor(private http: HttpClient ) { }

  getGyms(): Observable<Gym[]> {
    return this.http.get<Gym[]>(this.apiUrl);
  }

  createGym(gym: Gym): Observable<Gym> {
    return this.http.post<Gym>(this.apiUrl, gym);
  }
}
