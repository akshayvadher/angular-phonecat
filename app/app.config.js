'use strict';

angular.module('phonecatApp').config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);

    $routeProvider.when('/phones/:phoneId', {
      template: '<phone-detail></phone-detail>'
    }).otherwise({
      template: ''
    });
    ;
  }
]);
