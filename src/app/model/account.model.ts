export class Account{
  accountId !: string;
  lineOfBusiness !: string;
  marketplaceType !: string;
  state !: string;
  issuerSubscriberId !: string;

  constructor(accountId: string,
              lineOfBusiness: string,
              marketplaceType: string,
              state: string,
              issuerSubscriberId: string) {
    this.accountId = accountId;
    this.lineOfBusiness = lineOfBusiness;
    this.marketplaceType = marketplaceType;
    this.state = state;
    this.issuerSubscriberId = issuerSubscriberId;
  }
}
