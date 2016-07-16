/**
 * Created by yunhaoshen on 7/1/16.
 */
'use strict';

angular.module('projectApp')

  .factory('videoFactory',['$sce',function($sce){
    var videos = [
      {
        _id: 0,
        evenOrOddClass: 'oddContainer',
        name: "Aloha Hawaii",
        source: 'https://www.youtube.com/embed/pIIsa8IYVWU',
        date: '2016.04',
        intro: "In April 2016, I went to Hawaii for vocation. The video was taken by my DJI Phantom 3 & Canon 5D Mark II, and edited with Adobe After Effect and Premiere.",
        tools: ["DJI Phantom 3","Canon 5D Mark II","Adobe After Effect","Adobe Premiere"],
      },
      {
        _id: 1,
        evenOrOddClass: 'evenContainer',
        name: "Alaska - The Last Frontier",
        source: 'http://www.youtube.com/embed/8xZm70yGCm0',
        date: '2015.09',
        intro: "In Sept 2015, I went on a road trip to Alaska. The video was taken by my DJI Phantom 3 and edited with Adobe After Effect and Premiere.",
        tools: ["DJI Phantom 3","Adobe After Effect","Adobe Premiere"],
      },
      {
        _id: 2,
        evenOrOddClass: 'oddContainer',
        name: "University of Washington iSchool Capstone Project",
        source: 'https://www.youtube.com/embed/V6sOnU6Fwtg',
        date: '2014.06',
        intro: "This video was created for promoting my master program capstone project - Alaska Airline Carry-On Baggage Predictive Analytics.",
        tools: ["Adobe After Effect","Adobe Premiere"],
      },
      {
        _id: 3,
        evenOrOddClass: 'evenContainer',
        name: "iSchool Study Abroad Promotion Video",
        source: 'https://www.youtube.com/embed/FhRyVixfbi0',
        date: '2013.09',
        intro: "In September, 2013, I attended iSchool's Study Abroad - Denmark Exploration Seminar at University of Copenhagen. Based on our exciting experiences " +
        "in Denmark, I made this Study Abroad Promotion Video for my school.",
        tools: ["Adobe After Effect","Adobe Premiere"],
      },

    ];

    for (var i=0; i<videos.length; i++){
      videos[i].source = $sce.trustAsResourceUrl(videos[i].source);
    }

    var videoFac = {};
    videoFac.getVideos = function (){
      return videos;
    };
    videoFac.getVideo = function (index){
      return videos[index];
    };

    return videoFac;
  }])

;
