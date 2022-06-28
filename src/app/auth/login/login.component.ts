import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'zeus-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('action')
  action!: ElementRef;
  invalidLogin: boolean = false;
  errorMessage: string = 'Invalid Credentials!';
  constructor(private authService: AuthenticationService,
              private router: Router,
              private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(formValues: NgForm){
    console.log(formValues);
    console.log(formValues.value.username);
    let username = formValues.value.username;
    let password = formValues.value.password;
    // if(this.authService.authenticate(username, password)) {
    //   this.invalidLogin = false;
    //   this.router.navigate(['welcome']);
    // }else{
    //   this.invalidLogin=true;
    //   this.openSnackBar(this.errorMessage, this.action.nativeElement.value)
    // }
    //this.authService.basicAuthentication(username, password).subscribe({
    this.authService.jwtAuthentication(username, password).subscribe({
        next: auth => {
          console.log("Auth Value:", auth);
          this.router.navigate(['welcome']);
          this.invalidLogin = false;
        },
        error: err =>{
          console.log("Auth Error:", err);
          this.invalidLogin = true;
          this.openSnackBar(this.errorMessage, this.action.nativeElement.value)
        },
        complete: () => {}
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action);
  }

}
