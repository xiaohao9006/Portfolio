/**
 * Created by yunhaoshen on 6/21/16.
 */
'use strict';
//console.log("!!!")
//var myApp = angular.module('projectApp', []);
/*
angular.module('projectApp')
  .directive('fullPageScroll',function(){
    return{
      restrict: 'AE',
      link: function(scope,elem,attrs){
        //console.log("asdasd!");
        var srollMagicController = new ScrollMagic.Controller();
        var entryScene = new ScrollMagic.Scene({
          //triggerElement: "#entryPage",
          offset: 1
        })
          .addTo(srollMagicController);

        entryScene.on("enter", function()
        {
          $("#menuHeader").css("background", "#2d2c33");

        });
        entryScene.on("leave", function()
        {
          $("#menuHeader").css("background", "none");

        });

        var experienceScene = new ScrollMagic.Scene({
          triggerElement: "#experienceTrigger"
          //offset:
        })
          .addTo(srollMagicController);

        experienceScene.on("enter", function()
        {
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
      }
    }
  });
*/
