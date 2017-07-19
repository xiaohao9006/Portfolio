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

  .controller('ProjectsSummaryController', ['$scope', '$animate', '$state', 'workProjectIntroFactory', '$analytics', function($scope, $animate, $state, workProjectIntroFactory, $analytics){
    //console.log("!!!")
    var mainProjects = workProjectIntroFactory.getMainProjects();
    var sideProjects = workProjectIntroFactory.getSideProjects();

    $scope.mainProjects = mainProjects;
    $scope.sideProjects = sideProjects;

    $scope.$on('LastRepeaterElement', function(){
      //console.log('good to go');
      $('.special.card .image').dimmer({
        on: 'hover'
      });
    });



    $scope.learnMoreMainProject = function (index){

      //scrollToProject(index);
      var learnMoreMainProjectTrackEvent = "learn-more-" + $scope.mainProjects[index].name + ":button#click";
      learnMoreMainProjectTrackEvent = learnMoreMainProjectTrackEvent.toLowerCase();
      $analytics.eventTrack(learnMoreMainProjectTrackEvent);

      $('.special.card .image').dimmer('hide');
      $('.special.card .image').dimmer({
      });

      // if (index%2 != 0)
      // {
      //   //console.log(index);
      //   $('.' + $scope.projects[index].evenOrOddClass).css("background-color", "#383740");
      // }

      $state.go(mainProjects[index].detailTemplate)
      //$scope.projectDetailTemplate.template = projects[index].detailTemplate;


      //scrollToProject(index);

    };

    $scope.learnMoreSideProject = function (index){

      //scrollToProject(index);
      var learnMoreSideProjectTrackEvent = "learn-more-" + $scope.sideProjects[index].name + ":button#click";
      learnMoreSideProjectTrackEvent = learnMoreSideProjectTrackEvent.toLowerCase();
      $analytics.eventTrack(learnMoreSideProjectTrackEvent);

      $('.special.card .image').dimmer('hide');
      $('.special.card .image').dimmer({
      });

      // if (index%2 != 0)
      // {
      //   //console.log(index);
      //   $('.' + $scope.projects[index].evenOrOddClass).css("background-color", "#383740");
      // }

      $state.go(sideProjects[index].detailTemplate)
      //$scope.projectDetailTemplate.template = projects[index].detailTemplate;


      //scrollToProject(index);

    };






  }]);




