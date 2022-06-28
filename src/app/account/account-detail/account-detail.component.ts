import { Component, OnInit } from '@angular/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";

@Component({
  selector: 'zeus-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,useValue: {floatLabel: 'always'}}]
})
export class AccountDetailComponent implements OnInit {

  accountId:string = '12345'
  constructor() { }

  ngOnInit(): void {
  }

}
