'use strict';
/*global app: true
exported app */
/**
 * @ngdoc overview
 * @name 201502SoloApp
 * @description
 * # 201502SoloApp
 *
 * Main module of the application.
 */
var app = angular
  .module('mvpProject', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/exercises.html',
        controller: 'ExerciseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
