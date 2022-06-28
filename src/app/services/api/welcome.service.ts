import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Welcome} from "../../model/welcome.model";
import {ZeusApiResponse} from "../../model/zeus-api-response.model";

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private http: HttpClient) { }

  callZeusWelcomeAPI(){
    return this.http.get<ZeusApiResponse<Welcome>>('http://localhost:8088/api/v1/zeus/welcome')
  }
}
