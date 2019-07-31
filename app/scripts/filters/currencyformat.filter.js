'use strict';

angular.module('spafelizApp').filter('currencyFormat', currencyFormatFilter);

function currencyFormatFilter() {
  return function (value) {
    return 'COP '+ value.toLocaleString();
  }
}
