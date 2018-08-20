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
        name: "Fly to Orcas Island",
        source: 'https://www.youtube.com/embed/Axe9dtDrFt8',
        date: '2018.05',
        intro: "Flying over Puget Sound from Renton to Orcas Island as Pilot in Command.",
        tools: ["Adobe After Effect","Adobe Premiere"]
      },
      {
        _id: 1,
        evenOrOddClass: 'evenContainer',
        name: "Aloha Hawaii",
        source: 'https://www.youtube.com/embed/pIIsa8IYVWU',
        date: '2016.04',
        intro: "In April 2016, I went to Hawaii for vocation. The video was taken by my DJI Phantom 3 & Canon 5D Mark II, and edited with Adobe After Effect and Premiere.",
        tools: ["DJI Phantom 3","Canon 5D Mark II","Adobe After Effect","Adobe Premiere"],
      },
      {
        _id: 2,
        evenOrOddClass: 'oddContainer',
        name: "Alaska - The Last Frontier",
        source: 'https://www.youtube.com/embed/8xZm70yGCm0',
        date: '2015.09',
        intro: "In Sept 2015, I went on a road trip to Alaska. The video was taken by my DJI Phantom 3 and edited with Adobe After Effect and Premiere.",
        tools: ["DJI Phantom 3","Adobe After Effect","Adobe Premiere"],
      }

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
