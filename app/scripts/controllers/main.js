'use strict';

angular.module('spafelizApp').controller('MainCtrl', mainCtrl);

mainCtrl.$inject = ['spaServices'];

function mainCtrl (spaServices) {

  var vm = this;
  vm.$onInit = onInit;
  vm.myName = 'Alejo';
  vm.loadSpaServices = loadSpaServices;

  function onInit(){
    console.log('Hello!');
    vm.loadSpaServices();
  }

  function loadSpaServices () {
    vm.serviceList = spaServices.getAllServices();
    console.log(vm.serviceList);
  }
}
