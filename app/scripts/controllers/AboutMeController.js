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


  .controller('AboutMeController', ['$scope', function($scope){
    //console.log("!!!");
    var myDate = new Date();
    /* hour is before noon */
    if ( myDate.getHours() < 12 && myDate.getHours() > 3 )
    {

      $scope.greeting = "Good Morning";
    }
    else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
    if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 )
    {
      $scope.greeting = "Good Afternoon";
    }
    else  /* the hour is after 5pm, so it is between 6pm and midnight */
    if ( myDate.getHours() > 17 || myDate.getHours() <= 3 )
    {
      $scope.greeting = "Good Evening";
    }
    else  /* the hour is not between 0 and 24, so something is wrong */
    {
      $scope.greeting = "Good Day";
    }

    var scrollMagicController = new ScrollMagic.Controller();
    $("#learnMore").click(function(){
      scrollMagicController.scrollTo(function(learnMoreScrollToAnchor){
        $('html, body').animate({scrollTop : learnMoreScrollToAnchor},800);
      });
      scrollMagicController.scrollTo("#learnMoreScrollToAnchor");

    });


    //console.log("!!!");
  }]);


