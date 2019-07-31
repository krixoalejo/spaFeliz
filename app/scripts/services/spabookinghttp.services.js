'use strict';

angular.module('spafelizApp').service('spaBookingHttp', spaBookingHttp);

spaBookingHttp.$inject = ['$q', '$http', 'httpConfig'];

function spaBookingHttp ($q, $http, httpConfig) {
  var booking = {
    saveBookingPost: saveBookingPost
  }

  return booking;

  function saveBookingPost (booking) {
    var defered = $q.defer();
    var promise = defered.promise;
    const url = httpConfig.url + httpConfig.booking.saveBooking;
    $http.post(url, booking)
      .then(function (data) {
        defered.resolve(data);
      })
      .catch(function (error) {
        defered.reject(error);
      });
    return promise;
  }
}
