import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from '../Entities/User.Entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUri = 'https://localhost:7149';
  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<UserEntity[]> {
    return this.httpClient.get<UserEntity[]>(this.baseUri + '/api/user/GetAllUsers');
  }
}
