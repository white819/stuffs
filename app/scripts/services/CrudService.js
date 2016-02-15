/**
 * Created by machaoxing on 16/1/27.
 */
/*var app = angular
  .module('stuffsApp', ['ngResource']);*/
app.service('Crud', function($http, $q, $log) {
  /*this.getResource = function (cn) {
    var res =  $resource('http://localhost:3000/stuffs/:cn/:id',{cn:cn, id:'@id'},
      {
        'update':{method:'PUT'}
      });

    res.prototype.$save = function() {
      if (this._id) {
        return this.$update();
      } else {
        return this.$create();
      }
    };

    return res;
  };*/

  this.getItems = function(cn) {
    var deferred = $q.defer();
    $http.get('http://localhost:3000/stuffs/'+cn)
    .success(function (data) {
        deferred.resolve(data);
      }
    ).error(function (msg, code) {
      deferred.reject(msg);
      $log.error(msg, code);
    });
    return deferred.promise;
  }

  this.getItemById = function (cn ,id) {
    var deferred = $q.defer();
    $http.get('http://localhost:3000/stuffs/'+cn + '/' + id)
      .success(function (data) {
          deferred.resolve(data);
        }
      ).error(function (msg, code) {
      deferred.reject(msg);
      $log.error(msg, code);
    });
    return deferred.promise;
  }

  this.editItem = function (cn ,data) {
    var deferred = $q.defer(),
      _id = data._id;
      delete data._id;
    var _data = JSON.stringify(data);
    data._id = _id;
    $http.put('http://localhost:3000/stuffs/'+cn + '/' + _id, _data)
      .success(function (data) {
          deferred.resolve(data);
        }
      ).error(function (msg, code) {
      deferred.reject(msg);
      $log.error(msg, code);
    });
    return deferred.promise;
  }

  this.deleteItem = function (cn ,id) {
    var deferred = $q.defer();
    $http.delete('http://localhost:3000/stuffs/'+cn + '/' + id)
      .success(function (data) {
          deferred.resolve(data);
        }
      ).error(function (msg, code) {
      deferred.reject(msg);
      $log.error(msg, code);
    });
    return deferred.promise;
  }

  this.addItem = function(cn, data) {
    var deferred = $q.defer();
    $http.post('http://localhost:3000/stuffs/'+cn, data)
      .success(function (data) {
          deferred.resolve(data);
        }
      ).error(function (msg, code) {
      deferred.reject(msg);
      $log.error(msg, code);
    });
    return deferred.promise;
  }
});
