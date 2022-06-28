import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Account} from "../../model/account.model";
import {Subject} from "rxjs";
import {AccountSearch} from "../../model/account-search.model";
import {ZeusApiResponse} from "../../model/zeus-api-response.model";
import {AccountList} from "../../model/account-list.model";
import {TradingPartner} from "../../model/trading-partner.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  /**
   * The subject is to inform other parts of the module when the user clicks on the search button
   */
  accountSearch : Subject<void> = new Subject<void>();

  private accounts : Account[] = [];
  private accountSearchParams !: AccountSearch;


  /**
   * Constructor of the service
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Call the backend api to get all the accounts
   */
  getAllAccounts(){
    console.log("Getting all the accounts using params:", this.accountSearchParams);
    return this.http.get<ZeusApiResponse<AccountList>>('http://localhost:8088/api/v1/zeus/account');
  }

  /**
   * Call the backend API to retrieve the account by id
   * @param accountId
   */
  getAccountById(accountId: string){
    console.log("Inside get account by id:",accountId)
    return this.http.get<ZeusApiResponse<Account>>(`http://localhost:8088/api/v1/zeus/tp/${accountId}`);
  }

  /**
   * Returns a copy of the accounts array
   */
  getAccounts(){
    return this.accounts.slice();
  }

  /**
   * Sets the search parameters entered by the user
   * @param searchParams
   */
  setAccountSearchParams(searchParams: any){
    /**
     * Set the search parameters
     */
    this.accountSearchParams = searchParams;
    /**
     * Call the subject to indicate that the search was clicked and that search parameters are set
     */
    this.accountSearch.next();
  }

  /**
   * Get all the accounts based on the search parameter entered by the user
   */
  getSearchedAccounts(){
    console.log("Getting the searched accounts: ", this.accountSearchParams);
    const accountId = this.accountSearchParams.accountId;
    const issuerSubscriberId = this.accountSearchParams.issuerSubscriberId;
    let searchParams = new HttpParams();
    searchParams = searchParams.append('accountId', accountId);
    searchParams = searchParams.append('issuerSubscriberId', issuerSubscriberId);
    return this.http.get<ZeusApiResponse<AccountList>>('http://localhost:8088/api/v1/zeus/account/search',
      {
        params: searchParams
      });
  }

  /**
   * The method that calls the appropriate observable to display the results in the search grid
   */
  getAccount(){
    console.log("Account Search Params:", this.accountSearchParams);
    if(this.accountSearchParams === undefined || this.accountSearchParams === null){
      return this.getAllAccounts()
    }else {
      return this.getSearchedAccounts();
    }
  }
}
