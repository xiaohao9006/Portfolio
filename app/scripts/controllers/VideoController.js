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



