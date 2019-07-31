'use strict';

describe('Service: spaBooking.factory', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var spaBooking.factory;
  beforeEach(inject(function (_spaBooking.factory_) {
    spaBooking.factory = _spaBooking.factory_;
  }));

  it('should do something', function () {
    expect(!!spaBooking.factory).toBe(true);
  });

});
