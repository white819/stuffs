'use strict';

/**
 * @ngdoc overview
 * @name stuffsApp
 * @description
 * # stuffsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('stuffsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ui.grid.moveColumns',
    'ui.grid.edit',
    'ui.grid.selection',
    'ui.bootstrap.stackedMap',
    'ui.bootstrap.modal'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/oderList.html',
        controller: 'OrderCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/orderEdit.html',
        controller: 'OrderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
