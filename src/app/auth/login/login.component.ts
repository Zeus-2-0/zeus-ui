import {Component, DestroyRef, inject, Signal, viewChild} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'zeus-login',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginErrorMessage: string = '';
  private form: Signal<NgForm>= viewChild.required<NgForm>('loginForm');
  private destroyRef = inject(DestroyRef)

  onLogin(): void{
    console.log("user clicked login")
  }
}
