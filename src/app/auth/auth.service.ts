import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from './login/user.model';
import { UserCredentials } from './login/userCredentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = false;

  constructor(private http: HttpClient) { }

  login(credentials: UserCredentials): Observable<User> {
    return this.http.post<User>('https://localhost:5001/api/auth/login', credentials);
  }
}
