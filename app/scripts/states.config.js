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
    name: 'home.about',
    url: '/about',
    templateUrl: 'views/about.html'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(mainState);
  $stateProvider.state(aboutState);

  $urlRouterProvider.when('', '/');
}
