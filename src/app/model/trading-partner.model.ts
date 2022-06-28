export class TradingPartner{
  tradingPartnerId !: string;
  description !: string;
  lineOfBusinessTypeCode !: string;
  marketplaceTypeCode !: string;
  name !: string;
  receiverId !: string;
  senderId !: string;
  stateTypeCode !: string;
  tradingPartnerSK !: string

  constructor(tradingPartnerId: string,
              description: string,
              lineOfBusinessTypeCode: string,
              marketplaceTypeCode: string,
              name: string,
              receiverId: string,
              senderId: string,
              stateTypeCode: string,
              tradingPartnerSK: string) {
    this.tradingPartnerId = tradingPartnerId;
    this.description = description;
    this.lineOfBusinessTypeCode = lineOfBusinessTypeCode;
    this.marketplaceTypeCode = marketplaceTypeCode;
    this.name = name;
    this.receiverId = receiverId;
    this.senderId = senderId;
    this.stateTypeCode = stateTypeCode;
    this.tradingPartnerSK = tradingPartnerSK
  }
}
