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

  .controller('PersonalPortfolioController', ['$scope', 'workProjectIntroFactory','$state',function($scope, workProjectIntroFactory, $state){
    var projects = workProjectIntroFactory.getProjects();
    $scope.project = projects[2];
    $('.portfolioDesignProcessContainer .step').click(function(){
      $('.portfolioDesignProcessContainer .step').removeClass('active');
      $(this).addClass('active');

    });
    //$('.step').tab();
    $('.portfolioDesignProcessContainer .step').tab({
      context: $('.portfolioDesignProcessContainer')
    });

    $('.portfolioImplementationProcessContainer .step').click(function(){
      $('.portfolioImplementationProcessContainer .step').removeClass('active');
      $(this).addClass('active');

    });
    //$('.step').tab();
    $('.portfolioImplementationProcessContainer .step').tab({
      context: $('.portfolioImplementationProcessContainer')
    });


    $scope.closeProjectDetail = function (index){
      $('.special.card .image').dimmer({
        on: 'hover'
      });
      //$('.closeIcon').attr('style', 'display: none !important');

      /*for (var i=0; i < projects.length; i++) {
       //console.log(index);

       if (i != index) {
       $scope.projects[i].show = true;
       //console.log('.' + projects[i].evenOrOddClass)
       //console.log(index)
       //console.log(projects[i])
       }
       //console.log('.' + projects[i].evenOrOddClass)
       //console.log(projects[i])

       }*/


      //$scope.projectDetailTemplate.show = false;

      $state.go('projects.summary');

    };
    $scope.$on('$stateChangeSuccess', function(event) {
      //console.log("asdasd");
      $scope.scrollToProject();
      //event.stopPropagation();
    });



}]);



