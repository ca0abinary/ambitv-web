// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.service('apiService', function($http){
  this.edgeLit = function() { $http.get('/api/edgeLit'); };
  this.avgLit = function() { $http.get('/api/avgLit'); };
  this.moodLit = function() { $http.get('/api/moodLit'); };
  this.lightsOff = function() { $http.get('/api/lightsOff'); };
})

.controller('OnlyController', ['$scope', 'apiService', function($scope, apiService){
  $scope.edgeLit = function() { apiService.edgeLit(); };
  $scope.avgLit = function() { apiService.avgLit(); };
  $scope.moodLit = function() { apiService.moodLit(); };
  $scope.lightsOff = function() { apiService.lightsOff(); };
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
