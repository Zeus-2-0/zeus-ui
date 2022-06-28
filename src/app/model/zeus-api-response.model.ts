export class ZeusApiResponse<T>{
  response !: T;
  statusCode !: number;
  status !: string;
  reason !: string;
  message !: string;
  developerMessage !: string;
  timestamp !: Date

  constructor(response: T,
              statusCode : number,
              status : string,
              reason : string,
              message : string,
              developerMessage : string,
              timestamp : Date) {
    this.reason = reason;
    this.response = response;
    this.message = message;
    this.status = status;
    this.statusCode = statusCode;
    this.developerMessage = developerMessage;
    this.timestamp = timestamp;
  }

}
