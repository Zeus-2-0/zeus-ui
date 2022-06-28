import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {TradingPartnerService} from "../../../services/api/trading-partner.service";

@Component({
  selector: 'zeus-trading-partner-search-cockpit',
  templateUrl: './trading-partner-search-cockpit.component.html',
  styleUrls: ['./trading-partner-search-cockpit.component.css']
})
export class TradingPartnerSearchCockpitComponent implements OnInit {


  constructor(private router: Router,
              private tradingPartnerService: TradingPartnerService) { }

  ngOnInit(): void {
  }

  onSubmit(formValues: NgForm){
    console.log(formValues);
    this.tradingPartnerService.searchTradingPartner(formValues.value.tradingPartnerId);
  }

  onAddTradingPartner(){
    console.log("Trading Partner add clicked");
    this.router.navigate(['trading-partner/add']);
  }

}
