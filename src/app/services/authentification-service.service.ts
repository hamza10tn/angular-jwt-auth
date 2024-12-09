import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }
  singin(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/signin', data);
  }

  _is_logged(): boolean {
    return !!localStorage.getItem('access_token');
  }


}
