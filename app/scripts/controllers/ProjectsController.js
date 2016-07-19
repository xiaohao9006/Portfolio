'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectApp
 */

angular.module('projectApp')
  /*.controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })*/


  .controller('ProjectsController', ['$scope','$state', function($scope, $state){

    $state.go('projects.summary');

    $("#learnMoreWork").click(function(){
      $scope.scrollToProject_Animation();
    });
    //console.log("!!!")
  }])




