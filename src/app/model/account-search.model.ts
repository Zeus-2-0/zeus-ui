export class AccountSearch{
  accountId !: string;
  issuerSubscriberId !: string;

  constructor(accountId: string, issuerSubscriberId: string) {
    this.accountId = accountId;
    this.issuerSubscriberId = issuerSubscriberId;
  }
}
