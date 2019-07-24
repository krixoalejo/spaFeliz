'use strict';

describe('Service: htttpconfig.constant', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var htttpconfig.constant;
  beforeEach(inject(function (_htttpconfig.constant_) {
    htttpconfig.constant = _htttpconfig.constant_;
  }));

  it('should do something', function () {
    expect(!!htttpconfig.constant).toBe(true);
  });

});
