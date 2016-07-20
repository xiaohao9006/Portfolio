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

  .controller('AppController',['$scope', '$state', '$analytics',function($scope, $state, $analytics){
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
        $(".fullScreenHeader").removeClass("transparentMenu");

      });
      entryScene.on("leave", function()
      {
        $(".fullScreenHeader").addClass("transparentMenu");

      });

      var experienceScene = new ScrollMagic.Scene({
        triggerElement: "#experienceTrigger",
        //offset:100
      })
        .addTo(srollMagicController);

      experienceScene.on("enter", function()
      {
        //console.log("!!!!!!");
        $("#flightToUSA").addClass("animated fadeInCustomUp");
        $("#graduation").addClass("animated fadeInCustomDown delay");
        $("#executiveDashboard").addClass("animated fadeInCustomDown delay-one");
        $("#adobeReports").addClass("animated fadeInCustomUp delay-two");
        $("#myAgencyReports").addClass("animated fadeInCustomDown delay-three");


      });

      var skillsScene = new ScrollMagic.Scene({
        triggerElement: "#skillsTrigger"
        //offset:
      })
        .addTo(srollMagicController);

      skillsScene.on("enter", function(){
        $("#skillsBar-1").addClass("animated growBar");
        $("#skillsText-1").addClass("animated fadeInCustom");
        $("#skillsIcon-1").addClass("animated fadeInCustom");
        $("#skillsBar-2").addClass("animated growBar ");
        $("#skillsText-2").addClass("animated fadeInCustom ");
        $("#skillsIcon-2").addClass("animated fadeInCustom ");
        $("#skillsBar-3").addClass("animated growBar ");
        $("#skillsText-3").addClass("animated fadeInCustom ");
        $("#skillsIcon-3").addClass("animated fadeInCustom ");
        $("#skillsBar-4").addClass("animated growBar ");
        $("#skillsText-4").addClass("animated fadeInCustom ");
        $("#skillsIcon-4").addClass("animated fadeInCustom ");
        $("#skillsBar-5").addClass("animated growBar ");
        $("#skillsText-5").addClass("animated fadeInCustom ");
        $("#skillsIcon-5").addClass("animated fadeInCustom ");

        $("#English").addClass("animated show75");
        $("#Chinese").addClass("animated show100");
        $("#Spanish").addClass("animated show25");

      });

    };
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      //console.log(toState)
      if (toState.name === 'aboutme' || toState.name === 'projects' || toState.name === 'photos' || toState.name === 'videos')
      {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        console.log('root')
      }

      if (toState.name === 'projects') {
        $state.go('projects.summary')
        //$state.go('projects.personalportfolio')
      }
    });


    $scope.scrollToProject_Animation = function()
    {
      var scrollMagicController = new ScrollMagic.Controller();

      scrollMagicController.scrollTo(function(Anchor){
        $('html, body').animate(
          {scrollTop : Anchor},
          800
        );

      });
      scrollMagicController.scrollTo("#projectAnchor");

    };

    $scope.scrollToProject = function()
    {
      var scrollMagicController = new ScrollMagic.Controller();
      scrollMagicController.scrollTo("#projectAnchor");

    };

    $('.launchIcon').click(function(){
      //console.log("show!")
      $('body').attr('style', 'position: relative !important; overflow: hidden !important');
      $('html').attr('style', 'position: relative !important; overflow: hidden !important');

      $('.ui.labeled.icon.sidebar')
        .sidebar('toggle')
      ;

    });

    $('.ui.labeled.icon.sidebar')
      .sidebar({
        transition: 'uncover',
        scrollLock: true,
        onHidden: function() {
          $('body').attr('style', '');
          $('html').attr('style', '');
        }
      })

    $scope.clickSideBarMenuItem = function (event) {
      //console.log($(event.currentTarget));
      $('.ui.labeled.icon.sidebar')
        .sidebar('toggle')
      ;
      $('.sidebar a.item').removeClass('active');
      $(event.currentTarget).addClass('active');
      //console.log(event.currentTarget.getAttribute("href"))
      var temp_url = event.currentTarget.getAttribute("href")
      if (temp_url.indexOf("#") > -1)
      {
        temp_url = temp_url.replace("#","");
      }
      $analytics.pageTrack(temp_url);
    }

    $scope.clickFullMenuItem = function (event) {
      //console.log(event.currentTarget.getAttribute("href"))
      var temp_url = event.currentTarget.getAttribute("href")
      //console.log(temp_url)
      if (temp_url.indexOf("#") > -1)
      {
        temp_url = temp_url.replace("#","");
      }
      $analytics.pageTrack(temp_url);
    }

  }]);



