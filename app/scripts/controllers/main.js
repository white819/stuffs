'use strict';

/**
 * @ngdoc function
 * @name stuffsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stuffsApp
 */

angular.module('stuffsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
