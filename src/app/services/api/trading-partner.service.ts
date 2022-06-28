import { Injectable } from '@angular/core';
import {TradingPartner} from "../../model/trading-partner.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Account} from "../../model/account.model";
import {TradingPartnerList} from "../../model/trading-partner-list.model";
import {Subject} from "rxjs";
import {ZeusApiResponse} from "../../model/zeus-api-response.model";

@Injectable({
  providedIn: 'root'
})
export class TradingPartnerService {

  /**
   * The subject is to inform other parts of the module when the user clicks on the search button
   */
  tradingPartnerSearch : Subject<string> = new Subject<string>();

  /**
   * Constructor of the service
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Call the backend API to retrieve all the trading partners
   */
  getAllTradingPartners(){
    console.log("Inside get all trading partners");
    return this.http.get<ZeusApiResponse<TradingPartnerList>>('http://localhost:8088/api/v1/zeus/tp');
  }

  /**
   * Call the backend API to retrieve the trading partner by id
   * @param tradingPartnerId
   */
  getTradingPartnerById(tradingPartnerId: string){
    console.log("Inside get trading partner by id:",tradingPartnerId)
    return this.http.get<ZeusApiResponse<TradingPartner>>(`http://localhost:8088/api/v1/zeus/tp/${tradingPartnerId}`);
  }

  /**
   * Calls the backend API to retrieve the trading partner by the search parameters passed in the user
   * @param tradingPartnerId
   * @param state
   */
  getTradingPartnerBySearchParams(tradingPartnerId: string,
                                  state: string){
    let searchParams = new HttpParams();
    searchParams = searchParams.append('tradingPartnerId', tradingPartnerId)
    //return this.http.get<ZeusApiResponse<TradingPartnerList>>(`http://localhost:8088/api/v1/zeus/tp/search?tradingPartnerId=${tradingPartnerId}`)
    return this.http.get<ZeusApiResponse<TradingPartnerList>>('http://localhost:8088/api/v1/zeus/tp/search',
      {
        params: searchParams
      })
  }

  /**
   * This method is invoked from the trading partner search cockpit component when the
   * user clicks the search button.
   * It emits the next value along with the subscriber id that was entered so that the
   * subscriber of this subject can take the appropriate action
   * @param tradingPartnerId
   */
  searchTradingPartner(tradingPartnerId: string){
    this.tradingPartnerSearch.next(tradingPartnerId);
  }

  /**
   * This is the method that is called by the trading partner search results component
   * This methods call the appropriate method depending on whether the serach parameters where
   * passed or not
   *
   * TODO - Add code to include other search parameters, right now the user can only search by trading partner id
   * @param tradingPartnerId
   */
  getTradingPartner(tradingPartnerId: any){
    console.log("inside getTradingPartner method:", tradingPartnerId);
    if(tradingPartnerId === null || tradingPartnerId === ''){
      /**
       * If no parameters are passed in then call getAllTradingPartners method
       */
      return this.getAllTradingPartners();
    }else {
      /**
       * If search parameters are passed then call get all the trading partners
       * that match the search parameters
       */
      return this.getTradingPartnerBySearchParams(tradingPartnerId, 'FL');
    }
  }
}
