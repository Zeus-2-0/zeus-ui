import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountComponent} from "../../../account/account.component";
import {AccountSearchComponent} from "../../../account/account-search/account-search.component";
import {AccountDetailComponent} from "../../../account/account-detail/account-detail.component";
import {
  AccountSearchCockpitComponent
} from "../../../account/account-search/account-search-cockpit/account-search-cockpit.component";
import {
  AccountSearchResultsComponent
} from "../../../account/account-search/account-search-results/account-search-results.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../material/material.module";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {AccountRoutingModule} from "./account-routing.module";



@NgModule({
  declarations: [
    AccountComponent,
    AccountSearchComponent,
    AccountDetailComponent,
    AccountSearchCockpitComponent,
    AccountSearchResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexModule,
    FlexLayoutModule,
    AccountRoutingModule
  ],
  exports:[
    AccountComponent,
    AccountSearchComponent,
    AccountDetailComponent,
    AccountSearchCockpitComponent,
    AccountSearchResultsComponent
  ]
})
export class AccountModule { }
