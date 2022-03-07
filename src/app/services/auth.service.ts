import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /*register(registerDto: AuthRegisterRequest) : Observable<AuthRegisterResponse>{
    let requestUrl = `http://localhost:8080/auth/login`;
    return this.http.post<AuthRegisterResponse>(requestUrl, registerDto, DEFAULT_HEADERS);
  }
*/

}

