import {Account} from "./account.model";

export class AccountList{
  public accountDtos !: Account[];

  constructor(accountDtos: Account[]) {
    this.accountDtos = accountDtos;
  }

}
