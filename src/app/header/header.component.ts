import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'zeus-header',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  /**
   * Inject the Router instance for navigation
   * @private
   */
  private router = inject(Router);

  /**
   * Indicates if a user is logged in or not
   */
  userLoggedIn:boolean = false;

  /**
   * This method is called when the user clicks login link in the header
   */
  onLogin(){
    this.userLoggedIn = true;
    this.router.navigate(['/login']);
  }

  /**
   * This method is called when the user clicks the logout link in the header
   */
  onLogout(){
    this.userLoggedIn = false;
  }
}
