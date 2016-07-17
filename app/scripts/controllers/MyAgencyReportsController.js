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

  .controller('MyAgencyReportsController', ['$scope', 'workProjectIntroFactory','$state', function($scope,workProjectIntroFactory, $state){
    var projects = workProjectIntroFactory.getProjects();
    $scope.project = projects[1];
    $('.step').click(function(){
      $('.step').removeClass('active');
      $(this).addClass('active');

    });
    $('.step').tab();

    $scope.closeProjectDetail = function (index){
      $('.special.card .image').dimmer({
        on: 'hover'
      });


      $state.go('projects.summary');

    };
    $scope.$on('$stateChangeSuccess', function(event) {
      $scope.scrollToProject();
      //console.log("234")
      //event.stopPropagation();
    });
  }]);



