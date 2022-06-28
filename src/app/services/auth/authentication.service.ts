import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Authentication} from "../../model/authentication.model";
import {map} from "rxjs";
import {ZeusApiResponse} from "../../model/zeus-api-response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  basicAuthentication(username: string, password:string){
    let authHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let authHeader = new HttpHeaders({
      Authorization: authHeaderString
    });
    return this.http.get<ZeusApiResponse<Authentication>>(`http://localhost:8088/zeus/basic/authenticate`, {headers: authHeader}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('authToken', `Bearer ${data.response.authToken}`);
          return data;
        }
      )
    );
  }

  jwtAuthentication(username:string, password: string){
    return this.http.post<ZeusApiResponse<Authentication>>(`http://localhost:8088/zeus/jwt/authenticate`, {
      "username": username,
      "password": password
    }).pipe(
      map(
        data => {
          console.log("Authentication Response Data:", data);
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('authToken', `Bearer ${data.response.authToken}`);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem('authToken')
    }else{
      return null;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('authToken');
  }
}
