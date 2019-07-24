'use strict';

angular.module('spafelizApp').config(settings);
settings.$inject = ['$stateProvider','$urlRouterProvider'];

function settings($stateProvider, $urlRouterProvider){

  var homeState = {
    abstract: true,
    name: 'home',
    templateUrl: 'views/home.html'
  }

  var mainState = {
    name: 'home.main',
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl as vm'
  }

  var aboutState = {
    name: 'home.detail',
    url: '/detail/{id}',
    templateUrl: 'views/serviceDetail.html',
    controller: 'DetailCtrl as vm'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(mainState);
  $stateProvider.state(aboutState);

  $urlRouterProvider.when('', '/');
}
