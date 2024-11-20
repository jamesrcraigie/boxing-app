import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { Boxer } from '../models/boxer';
import { BoxerDto } from '../models/boxerDto';

@Injectable({
  providedIn: 'root'
})
export class BoxerService {

  private apiUrl = `${environment.apiUrl}/boxer`
  /**
   * The constructor function takes an instance of HttpClient as a parameter and assigns it to a
   * private property http.
   * @param {HttpClient} http - The `http` parameter in the constructor is of type `HttpClient`. This
   * parameter is used to make HTTP requests in Angular applications.
   */
  constructor(private http: HttpClient) { }

  getBoxers(): Observable<Boxer[]> {
    return this.http.get<Boxer[]>(this.apiUrl);
  }

  createBoxer(boxer: BoxerDto): Observable<BoxerDto> {
    return this.http.post<BoxerDto>(this.apiUrl, boxer);
  }

  deleteBoxer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getBoxerById(id: string): Observable<Boxer> {
    return this.http.get<Boxer>(`${this.apiUrl}/${id}`);
  }

  updateBoxer(boxer: BoxerDto): Observable<BoxerDto> {
    return this.http.put<BoxerDto>(`${this.apiUrl}/${boxer.id}`, boxer);
  }
}
