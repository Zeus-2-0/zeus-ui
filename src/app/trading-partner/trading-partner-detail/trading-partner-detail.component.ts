import {Component, OnDestroy, OnInit} from '@angular/core';
import {TradingPartner} from "../../model/trading-partner.model";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {TradingPartnerService} from "../../services/api/trading-partner.service";

@Component({
  selector: 'zeus-trading-partner-detail',
  templateUrl: './trading-partner-detail.component.html',
  styleUrls: ['./trading-partner-detail.component.css']
})
export class TradingPartnerDetailComponent implements OnInit, OnDestroy {

  accountId:string = '12345';
  tradingPartnerId !: string;
  tradingPartner : TradingPartner = new TradingPartner('','','','','','','','','');
  paramSubscription : Subscription = new Subscription();
  tpSubscription : Subscription = new Subscription();
  constructor(private route: ActivatedRoute,
              private tpService: TradingPartnerService) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe({
      next: (value) => {
        this.tradingPartnerId = value["tradingPartnerId"];
      }
    });
    console.log("Trading Partner Id:", this.tradingPartnerId);
    this.tpSubscription = this.tpService.getTradingPartnerById(this.tradingPartnerId).subscribe({
      next: value => {
        console.log("Trading Partner Detail:", value)
        this.tradingPartner = value.response;
        // this.tradingPartner.tradingPartnerId = value.response.tradingPartnerId;
        // this.tradingPartner.name = value.response.name;
        //console.log("Trading Partner Name:", value.name)
      },
      error: err => {
        console.log("Call to get trading partner detail errored out");
        console.log("Error:", err);
      },
      complete: () => {
        console.log("Http call to get trading partner completed");
      }
    })
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
    this.tpSubscription.unsubscribe();
  }

}
