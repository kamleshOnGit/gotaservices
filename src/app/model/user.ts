import {Experience} from './experience';

export class User {
  public id: number;
  public companyId: number;
  public username: string;
  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;
  public phone: string;
  public address: string;
  public experience: Experience;
  public isAdmin: boolean;
  public isSuperAdmin: boolean;
  public active: boolean;
  public createdAt: Date;
  public updatedAt: Date;
}
