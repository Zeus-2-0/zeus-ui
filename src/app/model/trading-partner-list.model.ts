import {TradingPartner} from "./trading-partner.model";

export class TradingPartnerList{

  public tradingPartnerDtos !: TradingPartner[];

  constructor(tradingPartnerDtos : TradingPartner[]) {
    this.tradingPartnerDtos = tradingPartnerDtos;
  }

  getTradingPartnerList(){
    return this.tradingPartnerDtos.slice();
  }
}
