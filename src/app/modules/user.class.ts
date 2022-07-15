export class User {
  firstName: string;
  lastName: string;
  birthday: number;
  street: string;
  zip: number;
  city: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.birthday = obj ? obj.birthday : 65456456546;
    this.street = obj ? obj.street : '';
    this.zip = obj ? obj.zip : 16945;
    this.city = obj ? obj.city : '';
  }
}
