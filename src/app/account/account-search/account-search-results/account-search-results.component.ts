import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Account} from "../../../model/account.model";
import {Router} from "@angular/router";
import {AccountService} from "../../../services/api/account.service";
import {AccountSearch} from "../../../model/account-search.model";
import {Subject, Subscription} from "rxjs";
import {AccountList} from "../../../model/account-list.model";
import {TradingPartner} from "../../../model/trading-partner.model";

@Component({
  selector: 'zeus-account-search-results',
  templateUrl: './account-search-results.component.html',
  styleUrls: ['./account-search-results.component.css']
})
export class AccountSearchResultsComponent implements OnInit, OnDestroy {

  /**
   * The list of columns that are displayed in the search grid
   */
  displayedColumns: string [] = ['accountId', 'lineOfBusiness','marketplace', 'state', 'issuerSubscriberId'];

  /**
   * The data source for the Mat table.
   */
  datasource = new MatTableDataSource<Account>();

  /**
   * Contains the list of accounts that are displayed in the search results grid
   */
  accounts : Account[] = [];

  /**
   * This is a subscription to the account service
   */
  accountServiceSubscription : Subscription = new Subscription();

  /**
   * This is a subscription for this component to know when the user clicked the search button in the
   * account search cockpit
   */
  accountSearchSubscription : Subscription = new Subscription();

  /**
   * Constructor of the component
   * @param router
   * @param accountService
   */
  constructor(private router: Router,
              private accountService: AccountService) { }

  ngOnInit(): void {
    console.log("Inside account search results ngOnInit");
    /**
     * When the component is first loaded all the accounts are loaded.
     * To get all the accounts NULL is passed to this method so
     * that all the accounts are returned.
     */
    this.accountServiceSubscription = this.getAccountServiceSubscription();
    /**
     * This subscription is created so that it will be invoked with the user clicks on the search button
     */
    this.accountServiceSubscription = this.accountService.accountSearch.subscribe({
      next: data =>{
        /**
         * When the user clicked the search button the trading partner id that was entered is passed in
         *  TODO - Need to update to include other search parameters that are present in the search cockpit
         */
        this.accountServiceSubscription = this.getAccountServiceSubscription();
      },
      error: err => {
        // TODO add some error handling mechanism
      },
      complete: () => {}
    });
  }

  selectAccount(account: Account){
    console.log("Account id selected:", account.accountId);
    this.router.navigate(['/account', account.accountId])
  }

  ngOnDestroy(): void {
    this.accountSearchSubscription.unsubscribe();
  }



  /**
   * This method takes in the account id and calls the
   * account service to get the account by account id
   * @param accountId
   * @private
   */
  private getAccountServiceSubscription() {
    console.log("Inside get Account service subscription");
    return this.accountService.getAccount().subscribe({
      next: data => {
        console.log("Accounts:", data)
        /**
         * Populate the account array with the trading partner list returned from the service
         */
        const accountList: Account[] = data.response.accountDtos;
        /**
         * Set the data source with the data recevied from the account list
         */
        console.log("Account list:", accountList)
        this.datasource.data = accountList;
      },
      error: err => {
        // TODO add code to handle errors
      },
      complete: () => {
        console.log("Inside complete");
      }
    });
  }

}
