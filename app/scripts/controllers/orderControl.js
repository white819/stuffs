'use strict';

/**
 * @ngdoc function
 * @name stuffsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stuffsApp
 */
angular.module('stuffsApp')
  .controller('OrderCtrl', function ($scope,$http,Order,$uibModal) {

    $scope.orderEdit = {};

    $scope.animationsEnabled = true;

    $scope.set = function () {
      $scope.orderEdit = {"name":"tt","age":"44"};
    }
    $scope.open = function (id) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/views/orderEdit.html',
        controller: 'OrderCtrl',
        size: 400,
        resolve: {
            orderEdit: function () {
            return Order.query(id);
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    };

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };

   /* $http.get('http://localhost:3000/stuffs/users').success(function(data) {
        $scope.gridOptions.data = data;
      })
      .error(function(data, status) {
        console.error('Repos error', status, data);
      })
      .finally(function() {
        console.log("finally finished repos");
      });*/

    $scope.gridOptions = {
      enableSorting: false,
      columnDefs: [
        // TODO index paging
        { field: 'name', width: '50%',displayName:"名字1", maxWidth: 200, minWidth: 70 },
        { field: 'age', width: '50%' },
        {name:' ',cellTemplate:'<div><button ng-click=" grid.appScope.open(row.entity._id)">Edit</button></div>'}
      ]
    };
    var orders = Order.query(function () {
      $scope.gridOptions.data = orders;
    });

    $scope.onClick = function(value){
        alert('ID: ' + value);
    };

    $scope.editUser = function(id){

      $http.get('http://localhost:3000/stuffs/users/' + '5694e8a8ba38dbd05cded517').success(function(data) {
          $scope.User = data;
        })
        .error(function(data, status) {
          console.error('Repos error', status, data);
        })
        .finally(function() {
          console.log("finally finished repos");
        });
    }();
  });
