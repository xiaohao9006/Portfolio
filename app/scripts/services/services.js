/**
 * Created by yunhaoshen on 7/1/16.
 */
'use strict';

angular.module('projectApp')
  .factory('workProjectIntroFactory',function(){
    var projectsIntro = [
      {
        _id: 0,
        evenOrOddClass: 'oddContainer',
        name: "Executive Dashboard",
        companyLogo: '/svgs/vertaforeLogo.svg',
        image: '/images/ExecutiveDashboard.png',
        roleIconClass: 'user',
        role: 'Experience Designer',
        date: '2014.11 - 2016.04',
        intro1: "Vertafore's Executive Dashboard is a new feature initially targeted " +
        "the executive users of agencies. It delivers easy to understand key data " +
        "points to executive from which they can make informed decisions. By bringing " +
        "these key metrics together into a single, easily digestible format for the first " +
        "time, agencies are allowed to take action more quickly on their business direction.",
        intro2: "I, as the only Experience Designer in the cross functional team, designed Executive " +
        "Dashboard to bring the key business performance KPIs to the fingertips of the Agency Executives.",
        tools: ["Adobe Illustrator","Adobe Photoshop","FramerJS","Highcharts"],
        detailTemplate: "projects.execdashboard"
        //show: true
      },
      {
        _id: 1,
        evenOrOddClass: 'evenContainer',
        name: "My Agency Reports",
        companyLogo: '/svgs/vertaforeLogo.svg',
        image: '/images/MyAgencyReports.png',
        roleIconClass: 'user',
        role: 'Experience Designer',
        date: '2016.01 - Present',
        intro1: "Vertafore’s My Agency Reports is the new reporting platform, replacing " +
        "legacy Vertafore Reporting. With My Agency Reports insurance agency is connected" +
        " to its critical data and has added flexibility to give them more control over the data.",
        intro2: "I, as the only Experience Designer in the cross functional team, designed My Agency Reports with a simplified navigation and added report filtering options. " +
        "Reports are simple to use and allow users to adapt and tailor reports to meet the needs of their insurance agency. Users can quickly build custom reports and slice data " +
        "into a view that makes sense for their business.",
        tools: ["Adobe Illustrator","Adobe Photoshop","FramerJS","Angular UI Grid"],
        detailTemplate: "projects.myagencyreports"
        //show: true
      }
    ];

    var workProjectIntroFac = {};
    workProjectIntroFac.getProjects = function (){
      return projectsIntro;
    };
    workProjectIntroFac.getProject = function (index){
      return workProjectIntroFac[index];
    };

    return workProjectIntroFac;
  })

  .factory('photoFactory',function(){
    var photos = [
      {
        _id: 0,
        location: "Maui Haleakalā National Park",
        image: '/images/photos/IMG_9826.jpg',
        date: '2016.04',
      },
      {
        _id: 1,
        location: "Maui Haleakalā National Park",
        image: '/images/photos/IMG_9776.jpg',
        date: '2016.04',
      },
      {
        _id: 2,
        location: "Maui Makena Beach State Park",
        image: '/images/photos/IMG_9587.jpg',
        date: '2016.04',
      },
      {
        _id: 4,
        location: "Honolulu Diamond Head",
        image: '/images/photos/IMG_9485.jpg',
        date: '2016.04',
      },
      {
        _id: 5,
        location: "Honululu Makapu'u Beach",
        image: '/images/photos/IMG_9355.jpg',
        date: '2016.04',
      },
      {
        _id: 6,
        location: "Honululu Lanikai Beach",
        image: '/images/photos/IMG_9271.jpg',
        date: '2016.04',
      },
      {
        _id: 7,
        location: "Honululu Sandy Beach Park",
        image: '/images/photos/IMG_9083.jpg',
        date: '2016.04',
      },
      {
        _id: 8,
        location: "Alaska Richardson Hwy",
        image: '/images/photos/IMG_8171.jpg',
        date: '2015.09',
      },
      {
        _id: 9,
        location: "Alaska Cold Foot",
        image: '/images/photos/IMG_7946.jpg',
        date: '2015.09',
      },
      {
        _id: 10,
        location: "Alaska Dalton Hwy",
        image: '/images/photos/IMG_7913.jpg',
        date: '2015.09',
      },
      {
        _id: 11,
        location: "Alaska Denali National Park",
        image: '/images/photos/IMG_7350.jpg',
        date: '2015.09',
      },
      {
        _id: 12,
        location: "Alaska Denali National Park",
        image: '/images/photos/IMG_7168.jpg',
        date: '2015.09',
      },
      {
        _id: 13,
        location: "Alaska Mount Denali",
        image: '/images/photos/IMG_6588.jpg',
        date: '2015.09',
      },
      {
        _id: 14,
        location: "Alaska Kenai Fjords National Park",
        image: '/images/photos/IMG_6190.jpg',
        date: '2015.09',
      },
      {
        _id: 15,
        location: "Oregon Crator Lake",
        image: '/images/photos/IMG_5533.jpg',
        date: '2015.07',
      },
      {
        _id: 16,
        location: "Tulip Town",
        image: '/images/photos/IMG_2566.jpg',
        date: '2015.04',
      },
      {
        _id: 17,
        location: "Seattle Downtown Skyline",
        image: '/images/photos/IMG_2409.jpg',
        date: '2015.03',
      },
      {
        _id: 18,
        location: "Grand Teton National Park",
        image: '/images/photos/IMG_9892.jpg',
        date: '2014.07',
      },
      {
        _id: 19,
        location: "Yellow Stone National Park",
        image: '/images/photos/IMG_0184.jpg',
        date: '2014.07',
      },
      {
        _id: 20,
        location: "Yellow Stone National Park",
        image: '/images/photos/IMG_0041.jpg',
        date: '2014.07',
      },

    ];

    var photoFac = {};
    photoFac.getPhotos = function (){
      return photos;
    };
    photoFac.getPhoto = function (index){
      return photos[index];
    };

    return photoFac;
  })

  .factory('videoFactory',['$sce',function($sce){
    var videos = [
      {
        _id: 0,
        evenOrOddClass: 'oddContainer',
        name: "Aloha Hawaii",
        source: 'http://www.youtube.com/embed/pIIsa8IYVWU',
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
        source: 'http://www.youtube.com/embed/V6sOnU6Fwtg',
        date: '2014.06',
        intro: "This video was created for promoting my master program capstone project - Alaska Airline Carry-On Baggage Predictive Analytics.",
        tools: ["Adobe After Effect","Adobe Premiere"],
      },
      {
        _id: 3,
        evenOrOddClass: 'evenContainer',
        name: "iSchool Study Abroad Promotion Video",
        source: 'http://www.youtube.com/embed/FhRyVixfbi0',
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
