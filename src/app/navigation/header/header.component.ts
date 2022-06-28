import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";

@Component({
  selector: 'zeus-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter<void>();

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSideNavToggle(){
    this.toggleSideNav.emit();
  }

}
