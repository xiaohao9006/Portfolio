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
        intro3:"",
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
        intro3:"",
        tools: ["Adobe Illustrator","Adobe Photoshop","FramerJS","Angular UI Grid"],
        detailTemplate: "projects.myagencyreports"
        //show: true
      },
      {
        _id: 2,
        evenOrOddClass: 'oddContainer',
        name: "Personal Portfolio",
        companyLogo: '',
        image: '/images/portfolioProject.jpg',
        roleIconClass: 'user',
        role: 'Designer / Developer',
        date: '2016.06 - 2016.07',
        intro1: 'My personal portfolio was completely rebuilt in June 2016, when I just ' +
        'finished my online Coursera specialization “Full Stack Web Development” and I thought it ' +
        'would be a good practice to put everything together - all the way from design to a well-built website.',
        intro2: 'I believe some of the most interesting and useful players in ' +
        'creating the modern Internet are hybrids between designers and developers — people ' +
        'who can translate between the disparate languages of the visual and the technical. And ' +
        'this personal project gave me so much experience of dancing on both ends.',
        intro3: 'The moment you enter this website, you are looking at my final work. Enjoy!',
        tools: ["Adobe Illustrator","Adobe Photoshop","Semantic UI","AngularJS","Yeoman","Gulp", "GitHub"],
        detailTemplate: "projects.personalportfolio"
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
;
