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

  .controller('AppController',['$scope', '$state', function($scope, $state){
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
    }

  }])

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
  }])

  .controller('ProjectsController', ['$scope','$state', function($scope, $state){

    $state.go('projects.summary');

    $("#learnMoreWork").click(function(){
      $scope.scrollToProject_Animation();
    });
    //console.log("!!!")
  }])

  .controller('ProjectsSummaryController', ['$scope', '$animate', '$state', 'workProjectIntroFactory', function($scope, $animate, $state, workProjectIntroFactory){
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






  }])

  .controller('ExecDashboardController', ['$scope', 'workProjectIntroFactory','$state',function($scope, workProjectIntroFactory, $state){
    var projects = workProjectIntroFactory.getProjects();
    $scope.project = projects[0];
    $('.step').click(function(){
      $('.step').removeClass('active');
      $(this).addClass('active');

    });
    $('.step').tab();

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



}])

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
  }])

  .controller('PhotoController', ['$scope', 'photoFactory', function($scope,photoFactory) {
    var photos = photoFactory.getPhotos();
    $scope.photos = photos;
    var scrollMagicController = new ScrollMagic.Controller();
    $("#SeeMorePhoto").click(function () {
      scrollMagicController.scrollTo(function (learnMoreScrollToAnchor) {
        $('html, body').animate({scrollTop: learnMoreScrollToAnchor}, 800);
      });
      scrollMagicController.scrollTo("#photoAnchor");

    });
  }])

  .controller('VideoController', ['$scope', '$sce', 'videoFactory', function($scope, $sce, videoFactory){
    var videos = videoFactory.getVideos();
    $scope.videos = videos;

    var scrollMagicController = new ScrollMagic.Controller();
    $("#SeeMoreVideo").click(function(){
      scrollMagicController.scrollTo(function(learnMoreScrollToAnchor){
        $('html, body').animate({scrollTop : learnMoreScrollToAnchor},800);
      });
      scrollMagicController.scrollTo("#videoAnchor");

    });
  }]);



