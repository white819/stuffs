'use strict';

/**
 * @ngdoc function
 * @name stuffsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stuffsApp
 */
angular.module('stuffsApp')
  .controller('OrderCtrl', function ($scope,$http,Crud,$uibModal) {

    $scope.cn = 'users';
    // init data
    $scope.gridOptions = {
      paginationPageSizes: [10, 20, 50],
      paginationPageSize: 10,
      enableSorting: false,
      columnDefs: [
        // TODO index paging
        { field: 'name', width: '30%',displayName:"名字1", maxWidth: 200, minWidth: 70 },
        { field: 'age', width: '30%' },
        {name:' ',cellTemplate:'<div><button ng-click=" grid.appScope.open(row.entity._id)">Edit</button>' +
                               '<button ng-click=" grid.appScope.deleteItem(row.entity._id)">Delete</button></div>'}
      ]
    };

    Crud.getItems('users').then(function (data) {
      $scope.gridOptions.data = data;
    })



    $scope.animationsEnabled = true;

    $scope.open = function (id) {
      //var itemSelected = Crud.getResource('users').get({'id': id});

      if (id == undefined) {
        $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: '/views/orderEdit.html',
          controller: 'ModalCtrl',
          scope: $scope,
          size: 400,
          resolve: {
            itemSelected: {data:{}, cn:'users'}
          }
        });
      } else {
        Crud.getItemById('users', id).then(
          function (data) {
            $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: '/views/orderEdit.html',
              controller: 'ModalCtrl',
              scope: $scope,
              size: 400,
              resolve: {
                itemSelected: {data:data, cn:'users'}
              }
            });
          }
        )
      }
    };
    $scope.deleteItem = function (id) {
      Crud.deleteItem('users',id).then(function () {
        console.log("delete id:"+id + " complete!")
        Crud.getItems('users').then(function (data) {
          $scope.gridOptions.data = data;
        })
      })
    }

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };



    $scope.onClick = function(value){
        alert('ID: ' + value);
    };

  });
