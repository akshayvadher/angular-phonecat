'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('phoneList').component('phoneList', {
  templateUrl: 'assets/phone-list/phone-list.template.html',
  controller: ['Phone',
    function PhoneListController(Phone) {
      Phone.getAll().then((response) => {
        this.phones = response;
      });
      this.orderProp = 'age';
    }
  ]
});
