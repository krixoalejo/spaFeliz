'use strict';

angular.module('spafelizApp').service('spaServicesHttp', spaServicesHttp);
spaServicesHttp.$inject = ['$http', '$q', 'httpConfig'];

function spaServicesHttp($http, $q, httpConfig){
  var services = {
    getAll: getAll,
    getById: getById
  }

  return services;

  function getAll () {
    var defered = $q.defer();
    var promise = defered.promise;
    const url = httpConfig.url + httpConfig.services.getAll;
    $http.get(url)
      .then(function (data) {
        defered.resolve(data);
      })
      .catch(function (error) {
        defered.reject(error);
      });
    return promise;
  }

  function getById (id) {
    var defered = $q.defer();
    var promise = defered.promise;
    const url = httpConfig.url + httpConfig.services.getById + id;
    $http.get(url)
      .then(function (data) {
        defered.resolve(data);
      })
      .catch(function (error) {
        defered.reject(error);
      });
    return promise;
  }
}
