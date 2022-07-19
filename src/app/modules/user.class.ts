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
    this.birthday = obj ? obj.birthday : '';
    this.street = obj ? obj.street : '';
    this.zip = obj ? obj.zip : '';
    this.city = obj ? obj.city : '';
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthday: this.birthday,
      street: this.street,
      zip: this.zip,
      city: this.city,
    };
  }
}
