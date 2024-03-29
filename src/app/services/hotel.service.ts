import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelEntity } from '../Entities/Hotel.Entity';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private readonly baseUrl = 'https://localhost:44350/';

  constructor(private _httpClient: HttpClient) { }

  /**
   * Get all hotels list service.
   */
  public getAllHotels(): Observable<HotelEntity[]> {
    return this._httpClient.get<HotelEntity[]>(this.baseUrl + 'api/hotel/GetAllHotels')
  }

  /**
   *  Add New hotel service.
   */
  public addNewHotel(hotelEntity:HotelEntity): Observable<boolean> {
    return this._httpClient.post<boolean>(this.baseUrl + 'api/hotel/AddNewHotel/', hotelEntity);
  }

  /**
   * Delete hotel service.
   * @param hotelId 
   * @returns 
   */
  public deleteHotel(hotelId:number): Observable<boolean> {
    return this._httpClient.delete<boolean>(this.baseUrl + 'api/hotel/DeleteHotel/'+hotelId);
  }

  /**
   * Get hotel by hotel id service.
   */
  public getHotelByHotelId(hotelId:number): Observable<HotelEntity> {
    return this._httpClient.get<HotelEntity>(this.baseUrl + 'api/hotel/GetHotelByHotelId/'+hotelId);
  }

}
