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
    var projects = workProjectIntroFactory.getProjects();


    $scope.projects = projects;

    $scope.$on('LastRepeaterElement', function(){
      //console.log('good to go');
      $('.special.card .image').dimmer({
        on: 'hover'
      });
    });



    $scope.learnMoreProject = function (index){

      //scrollToProject(index);
      var learnMoreProjectTrackEvent = "learn-more-" + $scope.projects[index].name + ":button#click"
      learnMoreProjectTrackEvent = learnMoreProjectTrackEvent.toLowerCase();
      $analytics.eventTrack(learnMoreProjectTrackEvent);

      $('.special.card .image').dimmer('hide');
      $('.special.card .image').dimmer({
      });

      if (index%2 != 0)
      {
        //console.log(index);
        $('.' + $scope.projects[index].evenOrOddClass).css("background-color", "#383740");
      }

      $state.go(projects[index].detailTemplate)
      //$scope.projectDetailTemplate.template = projects[index].detailTemplate;


      //scrollToProject(index);

    };






  }]);




