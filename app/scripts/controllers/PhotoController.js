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
  }]);



