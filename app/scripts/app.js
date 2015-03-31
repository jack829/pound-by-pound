'use strict';
/*global app: true */
/* exported app */
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
    'ngTouch',
    'firebase'
  ]);
app.constant('poundbypound', 'https://poundbypound.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/exercises.html',
        controller: 'ExerciseCtrl'
      })
      .when('/exercises/:exerciseName', {
        templateUrl: 'views/showexercise.html',
        controller: 'ExerciseViewCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });

