'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.httpConfig.constant
 * @description
 * # htttpconfig.constant
 * Constant in the spafelizApp.
 */
angular.module('spafelizApp')
  .constant('httpConfig', {
    url: 'http://localhost:3000/',
    services: {
      getAll: 'services',
      getById: 'services/'
    }
  });
