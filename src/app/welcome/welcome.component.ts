import { Component, OnInit } from '@angular/core';
import {WelcomeService} from "../services/api/welcome.service";
import {map} from "rxjs";
import {environment} from "../../environments/environment";

@Component({
  selector: 'zeus-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage !: string;
  constructor(private welcomeService: WelcomeService) { }

  ngOnInit(): void {
  }

  getWelcomeMessage(){
    console.log("Inside get Welcome Message:", environment.testEnvVariable);
    console.log("Inside get Welcome Message:", environment.apiUrl);
    this.welcomeService.callZeusWelcomeAPI()
      .subscribe(
      data => {
        console.log("Zeus Api Response:", data);
        console.log("Message from API:", data.message);
        console.log("Message from API:", data.status);
        console.log("Message from API:", data.response.username);
        this.welcomeMessage = data.response.username;
      }
    );
  }

}
