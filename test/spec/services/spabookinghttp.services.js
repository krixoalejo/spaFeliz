'use strict';

describe('Service: spaBookingHttp.services', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var spaBookingHttp.services;
  beforeEach(inject(function (_spaBookingHttp.services_) {
    spaBookingHttp.services = _spaBookingHttp.services_;
  }));

  it('should do something', function () {
    expect(!!spaBookingHttp.services).toBe(true);
  });

});
