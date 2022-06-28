import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginComponent} from "./auth/login/login.component";
import {TransactionComponent} from "./transaction/transaction.component";
import {TransactionSearchComponent} from "./transaction/transaction-search/transaction-search.component";
import {AccountComponent} from "./account/account.component";
import {AccountSearchComponent} from "./account/account-search/account-search.component";
import {AccountDetailComponent} from "./account/account-detail/account-detail.component";
import {LogoutComponent} from "./auth/logout/logout.component";
import {ZeusRouteGuardService} from "./services/auth/zeus-route-guard.service";
import {TradingPartnerComponent} from "./trading-partner/trading-partner.component";
import {TradingPartnerSearchComponent} from "./trading-partner/trading-partner-search/trading-partner-search.component";
import {TradingPartnerAddComponent} from "./trading-partner/trading-partner-add/trading-partner-add.component";
import {TradingPartnerDetailComponent} from "./trading-partner/trading-partner-detail/trading-partner-detail.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent, canActivate:[ZeusRouteGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'transaction', component: TransactionComponent, canActivate:[ZeusRouteGuardService], children:[
      {path: "search", component:TransactionSearchComponent}
    ]}//,
  /*{path: 'account', component: AccountComponent, canActivate:[ZeusRouteGuardService], children:[
      {path: 'search', component: AccountSearchComponent},
      {path: ':accountId', component: AccountDetailComponent}
    ]} ,
  {path: 'trading-partner', component: TradingPartnerComponent, canActivate:[ZeusRouteGuardService], children:[
      {path: 'search', component: TradingPartnerSearchComponent},
      {path: 'add', component: TradingPartnerAddComponent},
      {path: ':tradingPartnerId', component: TradingPartnerDetailComponent}
    ]}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
