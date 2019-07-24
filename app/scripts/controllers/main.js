'use strict';

angular.module('spafelizApp').controller('MainCtrl', mainCtrl);

mainCtrl.$inject = ['spaServices'];

function mainCtrl (spaServices) {

  var vm = this;
  vm.$onInit = onInit;
  vm.loadSpaServices = loadSpaServices;

  function onInit(){
    vm.loadSpaServices();
  }

  function loadSpaServices () {
    spaServices.getAllServices()
      .then(function (data) {
        vm.serviceList = data.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}
