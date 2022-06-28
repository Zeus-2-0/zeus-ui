import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./modules/material/material.module";
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionSearchComponent } from './transaction/transaction-search/transaction-search.component';
import { HeaderComponent } from './navigation/header/header.component';
import { AccountComponent } from './account/account.component';
import { AccountSearchComponent } from './account/account-search/account-search.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';
import {FormsModule} from "@angular/forms";
import { LogoutComponent } from './auth/logout/logout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AccountSearchCockpitComponent } from './account/account-search/account-search-cockpit/account-search-cockpit.component';
import { AccountSearchResultsComponent } from './account/account-search/account-search-results/account-search-results.component';
import {HttpInterceptorService} from "./services/http/http-interceptor.service";
import { TradingPartnerComponent } from './trading-partner/trading-partner.component';
import { TradingPartnerSearchComponent } from './trading-partner/trading-partner-search/trading-partner-search.component';
import { TradingPartnerSearchCockpitComponent } from './trading-partner/trading-partner-search/trading-partner-search-cockpit/trading-partner-search-cockpit.component';
import { TradingPartnerSearchResultsComponent } from './trading-partner/trading-partner-search/trading-partner-search-results/trading-partner-search-results.component';
import { TradingPartnerAddComponent } from './trading-partner/trading-partner-add/trading-partner-add.component';
import { TradingPartnerDetailComponent } from './trading-partner/trading-partner-detail/trading-partner-detail.component';
import {TradingPartnerModule} from "./modules/feature/trading-partner/trading-partner.module";
import {AccountModule} from "./modules/feature/account/account.module";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    TransactionComponent,
    TransactionSearchComponent,
    HeaderComponent,
    LogoutComponent
    // AccountComponent,
    // AccountSearchComponent,
    // AccountDetailComponent,
    // AccountSearchCockpitComponent,
    // AccountSearchResultsComponent,
    // TradingPartnerComponent,
    // TradingPartnerSearchComponent,
    // TradingPartnerSearchCockpitComponent,
    // TradingPartnerSearchResultsComponent,
    // TradingPartnerAddComponent,
    // TradingPartnerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    TradingPartnerModule,
    AccountModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
