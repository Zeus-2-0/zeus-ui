import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AccountComponent} from "../../../account/account.component";
import {ZeusRouteGuardService} from "../../../services/auth/zeus-route-guard.service";
import {AccountSearchComponent} from "../../../account/account-search/account-search.component";
import {AccountDetailComponent} from "../../../account/account-detail/account-detail.component";

const routes : Routes = [
  {path: 'account', component: AccountComponent, canActivate:[ZeusRouteGuardService], children:[
      {path: 'search', component: AccountSearchComponent},
      {path: ':accountId', component: AccountDetailComponent}
    ]
  }
]

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
export class AccountRoutingModule { }
