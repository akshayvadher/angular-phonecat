'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.module('phoneDetail').component('phoneDetail', {
  templateUrl: 'assets/phone-detail/phone-detail.template.html',
  controller: ['$routeParams', 'Phone',
    function PhoneDetailController($routeParams, Phone) {
      var self = this;
      Phone.get({phoneId: $routeParams.phoneId}).then((response) => {
        self.phone = response;
        self.setImage(self.phone.images[0]);
      });

      self.setImage = function setImage(imageUrl) {
        self.mainImageUrl = imageUrl;
      };
    }
  ]
});