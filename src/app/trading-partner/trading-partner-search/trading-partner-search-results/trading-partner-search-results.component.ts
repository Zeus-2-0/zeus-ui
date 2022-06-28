import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Account} from "../../../model/account.model";
import {TradingPartner} from "../../../model/trading-partner.model";
import {Router} from "@angular/router";
import {TradingPartnerService} from "../../../services/api/trading-partner.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'zeus-trading-partner-search-results',
  templateUrl: './trading-partner-search-results.component.html',
  styleUrls: ['./trading-partner-search-results.component.css']
})
export class TradingPartnerSearchResultsComponent implements OnInit, OnDestroy {

  /**
   * The list of columns that are displayed in the search grid
   */
  displayedColumns: string [] = ['tradingPartnerId', 'description','lineOfBusinessTypeCode','marketplaceTypeCode', 'stateTypeCode'];

  /**
   * The data source for the Mat table.
   */
  datasource = new MatTableDataSource<TradingPartner>();

  /**
   * Contains the list of trading partners that are displayed in the search results grid
   */
  tradingPartners : TradingPartner[] = [];
  /**
   * This is a subscription to the trading partner service
   */
  tpServiceSubscription : Subscription = new Subscription();

  /**
   * This is a subscription for this component to know when the user clicked the search button in the
   * trading partner search cockpit
   */
  tpSearchSubscription: Subscription = new Subscription();

  /**
   * Constructor of the component
   * @param router
   * @param tpService
   */
  constructor(private router: Router,
              private tpService: TradingPartnerService) { }

  ngOnInit(): void {
    console.log("Inside search results ngOnInit");
    /**
     * When the component is first loaded all the trading partners are loaded.
     * To get all the trading partners NULL is passed to this method so
     * that all the trading partners are returned.
     */
    this.tpServiceSubscription = this.getTpServiceSubscription(null);

    /**
     * This subscription is created so that it will be invoked with the user clicks on the search button
     */
    this.tpSearchSubscription = this.tpService.tradingPartnerSearch.subscribe({
      next: data =>{
        /**
         * When the user clicked the search button the trading partner id that was entered is passed in
         *  TODO - Need to update to include other search parameters that are present in the search cockpit
         */
        this.tpServiceSubscription = this.getTpServiceSubscription(data);
      },
      error: err => {
        // TODO add some error handling mechanism
      },
      complete: () => {}
    });
  }

  /**
   * This method takes in the trading partner id and calls the
   * trading partner service to get the trading partner by trading partner id
   * @param tradingPartnerId
   * @private
   */
  private getTpServiceSubscription(tradingPartnerId: any) {
    console.log("Inside get TP service subscription:", tradingPartnerId);
    return this.tpService.getTradingPartner(tradingPartnerId).subscribe({
      next: data => {
        console.log("Trading Partners:", data)
        /**
         * Populate the trading partner array with the trading partner list returned from the service
         */
        const tradingPartnerList: TradingPartner[] = data.response.tradingPartnerDtos;
        /**
         * Set the data source with the data recevied from the trading partner list
         */
        console.log("Trading Partner list:", tradingPartnerList)
        this.datasource.data = tradingPartnerList;
      },
      error: err => {
        // TODO add code to handle errors
      },
      complete: () => {
        console.log("Inside complete");
      }
    });
  }

  /**
   * This method is invoked when the user selects a specific trading partner to view their details
   * @param tradingPartner
   */
  selectAccount(tradingPartner: TradingPartner){
    console.log("Trading Partner id selected:", tradingPartner.tradingPartnerId);
    this.router.navigate(['/trading-partner', tradingPartner.tradingPartnerId])
  }

  /**
   * When the component is destroyed all the subscriptions should be removed.
   */
  ngOnDestroy(): void {
    this.tpServiceSubscription.unsubscribe();
    this.tpSearchSubscription.unsubscribe();
  }
}
