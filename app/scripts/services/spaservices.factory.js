'use strict';

angular.module('spafelizApp').factory('spaServices', spaServices);
spaServices.$inject = ['spaServicesHttp', '$q'];

function spaServices(spaServicesHttp, $q){
  var services = {
    getAllServices: getAllServices,
    getServiceById: getServiceById
  }

  return services;

  function getAllServices () {
    var defered = $q.defer();
    var promise = defered.promise;
    spaServicesHttp.getAll()
      .then(function (data) {
        defered.resolve(data);
      })
      .catch(function (error) {
        defered.reject(error);
      });
    return promise;
  }

  function getServiceById (id) {
    var defered = $q.defer();
    var promise = defered.promise;
    spaServicesHttp.getById(id)
      .then(function (data) {
        defered.resolve(data);
      })
      .catch(function (error) {
        defered.reject(error);
      });
    return promise;
  }
}
