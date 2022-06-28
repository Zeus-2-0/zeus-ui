import {Authority} from "./authority.model";

export class Role{
  roleName !: string;
  authorityDtos !: Authority []

  constructor(roleName: string,
              authorityDtos : Authority[]) {
    this.roleName = roleName;
    this.authorityDtos = authorityDtos;
  }
}
