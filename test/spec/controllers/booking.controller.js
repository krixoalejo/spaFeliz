'use strict';

describe('Controller: BookingControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('spafelizApp'));

  var BookingControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookingControllerCtrl = $controller('BookingControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookingControllerCtrl.awesomeThings.length).toBe(3);
  });
});
