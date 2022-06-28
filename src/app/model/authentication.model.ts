import {User} from "./user.model";

export class Authentication{
  authenticated !: boolean;
  authMessage !: string;
  authToken !: string;
  authExpiration !: Date;
  subject !: User;


  constructor(authenticated : boolean,
              authToken:string,
              authMessage : string,
              authExpiration: Date,
              subject : User) {
    this.authenticated = authenticated;
    this.authMessage = authMessage;
    this.authToken = authToken;
    this.authExpiration = authExpiration;
    this.subject = subject;
  }
}
