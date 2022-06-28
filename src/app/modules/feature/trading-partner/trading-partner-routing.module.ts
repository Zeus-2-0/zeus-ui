import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TradingPartnerComponent} from "../../../trading-partner/trading-partner.component";
import {ZeusRouteGuardService} from "../../../services/auth/zeus-route-guard.service";
import {
  TradingPartnerSearchComponent
} from "../../../trading-partner/trading-partner-search/trading-partner-search.component";
import {TradingPartnerAddComponent} from "../../../trading-partner/trading-partner-add/trading-partner-add.component";
import {
  TradingPartnerDetailComponent
} from "../../../trading-partner/trading-partner-detail/trading-partner-detail.component";

const routes: Routes = [
  {path: 'trading-partner', component: TradingPartnerComponent, canActivate:[ZeusRouteGuardService], children:[
      {path: 'search', component: TradingPartnerSearchComponent},
      {path: 'add', component: TradingPartnerAddComponent},
      {path: ':tradingPartnerId', component: TradingPartnerDetailComponent}
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TradingPartnerRoutingModule { }
