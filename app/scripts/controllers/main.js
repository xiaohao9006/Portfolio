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

  .controller('AppController',['$scope', function($scope){
    $scope.ngViewLoad = 0
    $scope.onViewLoad = function(){
      //console.log('view changed');
      if ($scope.ngViewLoad === 0)
      {
        var srollMagicController = new ScrollMagic.Controller();
        var entryScene = new ScrollMagic.Scene({
          //triggerElement: "#entryPage",
          offset: 1
        })
          .addTo(srollMagicController);

        entryScene.on("enter", function()
        {
          //console.log("asdasd");
          $("#menuHeader").css("background", "#2d2c33");

        });
        entryScene.on("leave", function()
        {
          $("#menuHeader").css("background", "none");

        });

        var experienceScene = new ScrollMagic.Scene({
          triggerElement: "#experienceTrigger",
          //offset:100
        })
          .addTo(srollMagicController);

        experienceScene.on("enter", function()
        {
          //console.log("!!!!!!");
          $("#flightToUSA").addClass("animated fadeInUp");
          $("#graduation").addClass("animated fadeInDown delay");
          $("#executiveDashboard").addClass("animated fadeInDown delay-one");
          $("#adobeReports").addClass("animated fadeInUp delay-two");
          $("#myAgencyReports").addClass("animated fadeInDown delay-three");


        });

        var skillsScene = new ScrollMagic.Scene({
          triggerElement: "#skillsTrigger"
          //offset:
        })
          .addTo(srollMagicController);

        skillsScene.on("enter", function(){
          $("#skillsBar-1").addClass("animated growBar");
          $("#skillsText-1").addClass("animated fadeIn");
          $("#skillsIcon-1").addClass("animated fadeIn");
          $("#skillsBar-2").addClass("animated growBar delay");
          $("#skillsText-2").addClass("animated fadeIn delay");
          $("#skillsIcon-2").addClass("animated fadeIn delay");
          $("#skillsBar-3").addClass("animated growBar delay-one");
          $("#skillsText-3").addClass("animated fadeIn delay-one");
          $("#skillsIcon-3").addClass("animated fadeIn delay-one");
          $("#skillsBar-4").addClass("animated growBar delay-two");
          $("#skillsText-4").addClass("animated fadeIn delay-two");
          $("#skillsIcon-4").addClass("animated fadeIn delay-two");
          $("#skillsBar-5").addClass("animated growBar delay-three");
          $("#skillsText-5").addClass("animated fadeIn delay-three");
          $("#skillsIcon-5").addClass("animated fadeIn delay-three");

          $("#English").addClass("animated show75");
          $("#Chinese").addClass("animated show100");
          $("#Spanish").addClass("animated show25");

        });

        $("#learnMore").click(function(){
          srollMagicController.scrollTo(function(learnMoreScrollToAnchor){
            $('html, body').animate({scrollTop : learnMoreScrollToAnchor},800);
          });
          srollMagicController.scrollTo("#learnMoreScrollToAnchor");
        })
        $scope.ngViewLoad++;
      }




    };
  }])

  .controller('HeaderTextController', ['$scope', function($scope){
    console.log("!!!");
    var myDate = new Date();
    /* hour is before noon */
    if ( myDate.getHours() < 12 )
    {

      $scope.greeting = "Good Morning";
    }
    else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
    if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 )
    {
      $scope.greeting = "Good Afternoon";
    }
    else  /* the hour is after 5pm, so it is between 6pm and midnight */
    if ( myDate.getHours() > 17 && myDate.getHours() <= 24 )
    {
      $scope.greeting = "Good Evening";
    }
    else  /* the hour is not between 0 and 24, so something is wrong */
    {
      $scope.greeting = "Good Day";
    }


    //console.log("!!!");
  }]);


