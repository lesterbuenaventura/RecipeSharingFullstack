import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:5454'

  constructor(private http:HttpClient) { }

  authSubject = new BehaviorSubject<any>({
    user: null
  });

  login(userData:any) : Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/signin`,userData);
  }

  register(userData:any) : Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/signup`,userData);
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("jwt");
    return new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    });
  }

  getUserProfile() : Observable<any>{
    const headers = this.getHeaders();

    return this.http.get<any>(`${this.baseUrl}/api/users/profile`, {headers}).pipe(tap((user) => {
      console.log("get user profile ", user)
      const currentState = this.authSubject.value;
      this.authSubject.next({...currentState, user});
    }));
  }

  logout(){
    localStorage.clear();
    this.authSubject.next({});
  }

}
