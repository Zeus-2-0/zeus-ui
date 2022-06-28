import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TradingPartnerComponent} from "../../../trading-partner/trading-partner.component";
import {
  TradingPartnerSearchComponent
} from "../../../trading-partner/trading-partner-search/trading-partner-search.component";
import {
  TradingPartnerSearchCockpitComponent
} from "../../../trading-partner/trading-partner-search/trading-partner-search-cockpit/trading-partner-search-cockpit.component";
import {
  TradingPartnerSearchResultsComponent
} from "../../../trading-partner/trading-partner-search/trading-partner-search-results/trading-partner-search-results.component";
import {TradingPartnerAddComponent} from "../../../trading-partner/trading-partner-add/trading-partner-add.component";
import {
  TradingPartnerDetailComponent
} from "../../../trading-partner/trading-partner-detail/trading-partner-detail.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../material/material.module";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {TradingPartnerRoutingModule} from "./trading-partner-routing.module";



@NgModule({
  declarations: [
    TradingPartnerComponent,
    TradingPartnerSearchComponent,
    TradingPartnerSearchCockpitComponent,
    TradingPartnerSearchResultsComponent,
    TradingPartnerAddComponent,
    TradingPartnerDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexModule,
    FlexLayoutModule,
    TradingPartnerRoutingModule
  ],
  exports: [
    // TradingPartnerComponent,
    // TradingPartnerSearchComponent,
    // TradingPartnerSearchCockpitComponent,
    // TradingPartnerSearchResultsComponent,
    // TradingPartnerAddComponent,
    // TradingPartnerDetailComponent
  ]
})
export class TradingPartnerModule { }
