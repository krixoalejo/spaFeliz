'use strict';

angular.module('spafelizApp').controller('DetailCtrl', detailCtrl);

detailCtrl.$inject = ['$state', 'spaServices'];

function detailCtrl ($state, spaServices) {

  var vm = this;
  vm.$onInit = onInit;
  vm.getById = $state.params.id;
  vm.loadSpaServiceById = loadSpaServiceById;

  function onInit(){
    vm.loadSpaServiceById();
  }

  function loadSpaServiceById () {
    spaServices.getServiceById(vm.getById)
      .then(function (data) {
        vm.service = data.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}
