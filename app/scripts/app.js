'use strict';

/**
 * @ngdoc overview
 * @name projectApp
 * @description
 * # projectApp
 *
 * Main module of the application.
 */
/*angular
  .module('projectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/

angular.module('projectApp',['ui.router','ngAnimate', 'angulartics', 'angulartics.google.analytics'])
  .config(function ($analyticsProvider) {
    // turn off automatic tracking
    $analyticsProvider.virtualPageviews(false);
  })
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/aboutme");

    $stateProvider
      .state('aboutme', {
        url: "/aboutme",
        templateUrl:"views/aboutme.html"
      })
      .state('projects', {
        //abstract: true,
        url: '/projects',
        templateUrl:"views/projects.html"
      })
      .state('photos', {
        url: '/photos',
        templateUrl:"views/photos.html"
      })
      .state('videos', {
        url: '/videos',
        templateUrl:"views/videos.html"
      })
      .state('projects.summary', {
        url: '',
        templateUrl:"views/projectsSummary.html"
      })

      .state('projects.wscrc', {
        url:'/wscrc',
        templateUrl: "views/wscrc.html"
      })
      .state('projects.execdashboard', {
        url:'/execdashboard',
        templateUrl:"views/executiveDashboardDetail.html"
      })
      .state('projects.myagencyreports',{
        url:'/myagencyreports',
        templateUrl:"views/myAgencyReportsDetail.html"
      })
      .state('projects.myconnectedcar', {
        url:'/myconnectedcar',
        templateUrl:"views/myConnectedCar.html"
      })
      .state('projects.personalportfolio',{
        url:'/personalportfolio',
        templateUrl:"views/personalPortfolioDetail.html"
      })
      .state('projects.portfoliowebanalytics',{
        url:'/portfoliowebanalytics',
        templateUrl:"views/portfolioWebAnalytcisDetail.html"
      });
  })
;



/*$('#fullpage').fullpage({
  //Navigation
  menu: false,
  lockAnchors: false,
  anchors:['firstPage', 'secondPage'],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['firstSlide', 'secondSlide'],
  showActiveTooltip: false,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',

  //Scrolling
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  normalScrollElements: '#element1, .element2',
  scrollOverflow: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  normalScrollElementTouchThreshold: 5,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: true,
  sectionsColor : false,
  paddingTop: '3em',
  paddingBottom: '10px',
  fixedElements: '#header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 0,

  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',

  //events
  onLeave: function(index, nextIndex, direction){
  },
  afterLoad: function(anchorLink, index){
    if (index === 2)
    {
      $('#menuHeader').css("background-color","#2d2c33");
    }
    if (index === 1)
    {
      $('#menuHeader').css("background-color","transparent");
    }

  },
  afterRender: function(){},
  afterResize: function(){},
  afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
  onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
});*/



