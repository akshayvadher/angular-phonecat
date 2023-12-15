'use strict';

// Define the `phoneList` module
angular.module('phoneList', ['core.phone']);

// Register `phoneList` component, along with its associated controller and template
angular.
module('phoneList').
component('phoneList', {
  templateUrl: 'components/phone-list.template.html',
  controller: ['Phone',
    function PhoneListController(Phone) {
      this.phones = Phone.query();
      this.orderProp = 'age';
    }
  ]
});
