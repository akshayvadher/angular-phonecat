declare const angular: any;

export interface Phone {
  id: string;
  imageUrl: string;
  name: string;
  snippet: string;
}

class PhoneListController {
  phones: Phone[];
  orderProp: string;
  query: string = '';

  static $inject = ['Phone'];

  constructor(Phone: any) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }

}

angular.module('phoneList').component('phoneList', {
  templateUrl: 'phone-list/phone-list.template.html',
  controller: PhoneListController
});