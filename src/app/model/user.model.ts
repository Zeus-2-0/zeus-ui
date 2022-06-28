import {Role} from "./role.model";

export class User{
  username !: string;
  password !: string;
  roleDtos !: Role[];

  constructor(username: string, password: string, roleDtos: Role[]) {
    this.username = username;
    this.password = password;
    this.roleDtos = roleDtos;
  }
}
