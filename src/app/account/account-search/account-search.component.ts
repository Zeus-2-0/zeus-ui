import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {Account} from "../../model/account.model";
import {Router} from "@angular/router";
import {A} from "@angular/cdk/keycodes";
import {AccountSearch} from "../../model/account-search.model";
import {Subject} from "rxjs";

@Component({
  selector: 'zeus-account-search',
  templateUrl: './account-search.component.html',
  styleUrls: ['./account-search.component.css']
})
export class AccountSearchComponent implements OnInit {

/*  searchClick : boolean = false;
  initialLoad : boolean = true;
  searchValue : number = 0;*/
  constructor() { }

  ngOnInit(): void {

  }

/*  onSearch(){
    // this.searchClick = true;
    // this.initialLoad = false;
    this.searchValue = 1;
  }

  onSearchComplete(){
    // this.searchClick = false;
    this.searchValue = 2;
  }*/

}
