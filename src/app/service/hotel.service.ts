import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelEntity } from '../Entities/Hotel.Entity';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseUri = 'https://localhost:7149';
  constructor(private httpClient: HttpClient) { }

  public getAllHotels(): Observable<HotelEntity[]> {
    return this.httpClient.get<HotelEntity[]>(this.baseUri + '/api/hotel/GetAllHotels');
  }
}
