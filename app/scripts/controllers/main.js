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
    $scope.onViewLoad = function(){
      //console.log('view changed');

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
        $("#graduation").addClass("animated fadeInDown");
        $("#executiveDashboard").addClass("animated fadeInDown");
        $("#adobeReports").addClass("animated fadeInUp");
        $("#myAgencyReports").addClass("animated fadeInDown");


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
        $("#skillsBar-2").addClass("animated growBar ");
        $("#skillsText-2").addClass("animated fadeIn ");
        $("#skillsIcon-2").addClass("animated fadeIn ");
        $("#skillsBar-3").addClass("animated growBar ");
        $("#skillsText-3").addClass("animated fadeIn ");
        $("#skillsIcon-3").addClass("animated fadeIn ");
        $("#skillsBar-4").addClass("animated growBar ");
        $("#skillsText-4").addClass("animated fadeIn ");
        $("#skillsIcon-4").addClass("animated fadeIn ");
        $("#skillsBar-5").addClass("animated growBar ");
        $("#skillsText-5").addClass("animated fadeIn ");
        $("#skillsIcon-5").addClass("animated fadeIn ");

        $("#English").addClass("animated show75");
        $("#Chinese").addClass("animated show100");
        $("#Spanish").addClass("animated show25");

      });

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

    var srollMagicController = new ScrollMagic.Controller();
    $("#learnMore").click(function(){
      srollMagicController.scrollTo(function(learnMoreScrollToAnchor){
        $('html, body').animate({scrollTop : learnMoreScrollToAnchor},800);
      });
      srollMagicController.scrollTo("#learnMoreScrollToAnchor");

    });


    //console.log("!!!");
  }])

  .controller('ProjectsController', ['$scope', 'workProjectIntroFactory', function($scope, workProjectIntroFactory){
    var projects = workProjectIntroFactory.getProjects();

    $scope.projects = projects;
    $scope.projectDetailTemplate = '';

    //console.log( $('.special.card .image').dimmer({}));
    //console.log($scope.$last)
    $scope.$on('LastRepeaterElement', function(){
      //console.log('good to go');
      $('.special.card .image').dimmer({
        on: 'hover'
      });
    });



    $scope.learnMoreProject = function (index){
      $('.special.card .image').dimmer('hide');
      $('.special.card .image').dimmer({
      });
      $('.closeIcon').attr('style', 'display: block !important');
      for (var i=0; i < projects.length; i++) {
        //console.log(index);
        if (i != index) {
          $('.' + projects[i].evenOrOddClass).css("display", "none");
          //console.log('.' + projects[i].evenOrOddClass)
          //console.log(projects[i])
        }
      }
      if (index%2 != 0)
      {
        //console.log(index);
        $('.' + projects[index].evenOrOddClass).css("background-color", "#383740");
      }

      $scope.projectDetailTemplate = projects[index].detailTemplate;
      $('.projectDetailTemplate').css('display', 'block');

    };

    $scope.clostProjectDetail = function (index){
      $('.special.card .image').dimmer({
        on: 'hover'
      });
      $('.closeIcon').attr('style', 'display: none !important');
      for (var i=0; i < projects.length; i++) {
        //console.log(index);

        $('.' + projects[i].evenOrOddClass).css("display", "block");
        //console.log('.' + projects[i].evenOrOddClass)
        //console.log(projects[i])

      }

      if (index%2 != 0)
      {
        $('.' + projects[index].evenOrOddClass).css("background-color", "#403F49");
      }

      $('.projectDetailTemplate').css('display', 'none');
    };







    /*$('.special.card .image').dimmer({
      on: 'hover'
    });
    $('#executiveDashboardLearnMore').click(function(){
      $('.special.card .image').dimmer('hide');
      $('.special.card .image').dimmer({
      });
      $('.oddContainer').css("display", "none");
      $('.evenContainer').css('background-color', "#383740");
      $('.closeIcon').attr('style', 'display: block !important');

    });

    $('.closeIcon').click(function(){
      $('.special.card .image').dimmer({
        on: 'hover'
      });
      $('.oddContainer').css("display", "block");
      $('.evenContainer').css('background-color', "#403F49");
      $('.closeIcon').attr('style', 'display: none !important');
    })


    $('#myAgencyReportsLearnMore').click(function(){
      $('.special.card .image').dimmer('hide');
      $('.special.card .image').dimmer({

      });
    })*/
  }])

  .controller('ProjectDetailController', ['$scope', function($scope){
    $('.step').click(function(){
      $('.step').removeClass('active');
      $(this).addClass('active');

    });
    $('.step').tab();

}]);



