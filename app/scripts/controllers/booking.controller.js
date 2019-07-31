'use strict';

angular.module('spafelizApp')
  .controller('BookingCtrl', bookingController);

bookingController.$inject = ['spaServices', 'spaBooking', 'httpConfig'];

function bookingController(spaServices, spaBooking, httpConfig) {
  var vm = this;
  vm.form = {};
  vm.services = {}
  vm.$onInit = onInit;
  vm.submitBooking = submitBooking;
  vm.getAllServices = getAllServices;
  vm.limpiarCampos = limpiarCampos;

  function onInit(params) {
    vm.getAllServices();
  }

  function submitBooking() {
    let fecha = moment(vm.form.fecha).format("MM-DD-YYYY");
    let hora = moment(vm.form.hora).format("HH:mm");
    let booking = {
      name1: vm.form.primerNombre ? vm.form.primerNombre : '',
      name2: vm.form.segundoNombre ? vm.form.segundoNombre : '',
      lastName1: vm.form.primerApellido ? vm.form.primerApellido : '',
      lastName2: vm.form.segundoApellido ? vm.form.segundoApellido : '',
      email: vm.form.correo ? vm.form.correo : '',
      date: fecha ? fecha : '',
      hour: hora ? hora : '',
      serviceType: vm.form.tipoServicio ? vm.form.tipoServicio : ''
    }
    spaBooking.saveBooking(JSON.stringify(booking))
      .then(data=>{
        if ( data.status === httpConfig.httpStatus.OK ) {
          vm.limpiarCampos();
          alert('Su reserva se realizó exitosamente.');
        }
      })
      .catch( error => {
        console.error('Error', error);
      });
  }

  function getAllServices() {
    spaServices.getAllServices()
      .then(function (data) {
        vm.services = data.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function limpiarCampos () {
    vm.form.primerNombre = '';
    vm.form.segundoNombre = '';
    vm.form.primerApellido = '';
    vm.form.segundoApellido = '';
    vm.form.correo = '';
    vm.form.fecha = '';
    vm.form.hora = '';
    vm.form.tipoServicio = '';
  }
}
