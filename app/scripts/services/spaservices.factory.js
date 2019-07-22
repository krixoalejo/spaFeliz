'use strict';

angular.module('spafelizApp').factory('spaServices', spaServices);
spaServices.$inject = [];

function spaServices(){
  var dataServices = [
    {
      id: 1,
      name: 'Masaje sencillo',
      cost: '60,000',
      description: '30 min. Sin final feliz.',
      endHappy: false,
      image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg'
    },
    {
      id: 2,
      name: 'Chocolaterapia',
      cost: '80,000',
      description: '30 min. Sin final feliz.',
      endHappy: false,
      image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg'
    },
    {
      id: 3,
      name: 'Masaje full',
      cost: '150,000',
      description: '60 min. Con final feliz.',
      endHappy: true,
      image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg'
    },
  ];
  //Variable para retornar los métodos e implementaciones de la fabrica.
  var services = {
    getAllServices: getAllServices,
    getServiceById: getServiceById
  }

  return services;

  function getAllServices () {
    return dataServices;
  }

  function getServiceById (id) {
    for (let i = 0; i < dataServices.length; i++) {
      if (id === dataServices[i].id) return dataServices[i];
    }
    return null;
  }
}
