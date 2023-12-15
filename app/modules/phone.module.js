'use strict';

// Define the `core.phone` module
angular.module('core.phone', ['ngResource']);

angular.
module('core.phone').
factory('Phone', ['$resource',
  function($resource) {
    return $resource('phones/:phoneId.json', {}, {
      query: {
        method: 'GET',
        params: {phoneId: 'phones'},
        isArray: true
      }
    });
  }
]);