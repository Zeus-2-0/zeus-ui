import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from "../../../services/api/account.service";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {AccountSearch} from "../../../model/account-search.model";

@Component({
  selector: 'zeus-account-search-cockpit',
  templateUrl: './account-search-cockpit.component.html',
  styleUrls: ['./account-search-cockpit.component.css']
})
export class AccountSearchCockpitComponent implements OnInit {

  /**
   * Constructor of the component
   * @param accountService
   */
  constructor(private accountService: AccountService) { }

  //@Output() searchClicked = new EventEmitter<void>();

  /**
   * ngOnit called when the component is initialized
   */
  ngOnInit(): void {
  }

  /**
   * This method is invoked when the user clicks the SEARCH button in the UI
   * @param formValues
   */
  onSubmit(formValues: NgForm){
    console.log(formValues);
    console.log("Account Id:",formValues.value.accountId);
    console.log("Issuer Subscriber Id:", formValues.value.subId);
    if((formValues.value.accountId) || (formValues.value.subId)){
      console.log("Either account id or Sub id has a value")
      let accountSearch :  AccountSearch = new AccountSearch(formValues.value.accountId, formValues.value.subId);
      this.accountService.setAccountSearchParams(accountSearch);
    }

    //this.searchClicked.emit();
    //this.accountService.getAllAccounts();
  }

}
