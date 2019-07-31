'use strict';

angular.module('spafelizApp').factory('spaBooking', spaBooking);
spaBooking.$inject = ['spaBookingHttp', '$q'];

function spaBooking(spaBookingHttp, $q){
  var booking = {
    saveBooking: saveBooking
  }

  return booking;

  function saveBooking (booking) {
    var defered = $q.defer();
    var promise = defered.promise;
    spaBookingHttp.saveBookingPost(booking)
      .then(function (data) {
        defered.resolve(data);
      })
      .catch(function (error) {
        defered.reject(error);
      });
    return promise;
  }
}
