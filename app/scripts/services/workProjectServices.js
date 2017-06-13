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
        name: "WSCRC Website",
        companyLogo: '/images/isoftstone.png',
        image: '/images/wscrc.png',
        roleIconClass: 'user',
        role: 'Experience Designer | Developer',
        date: '2016.11 - 2017.03',
        intro1: "The WSCRC site was outdated and didn't offer the " +
        "functionality and user experience expected of similar membership organizations. " +
        "After five months closely working with clients, I redesigned, " +
        "developed and deployed the entire newly website.",
        intro2: "Now in general, the redesigned website encourages more interaction with visitors, " +
        "clearly tells the story of what WSCRC does, why membership is beneficial and is more lively overall.",
        intro3: "",
        projectLink: "https://wscrc.org",
        tools: ["Adobe Illustrator","Adobe Experience Design","Amazon Web Services"],
        detailTemplate: "projects.wscrc"
      },
      {
        _id: 1,
        evenOrOddClass: 'evenContainer',
        name: "My Agency Reports",
        companyLogo: '/svgs/vertaforeLogo.svg',
        image: '/images/MyAgencyReports.png',
        roleIconClass: 'user',
        role: 'Experience Designer',
        date: '2016.01 - 2016.09',
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
        _id: 3,
        evenOrOddClass: 'oddContainer',
        name: "My Connected Car",
        companyLogo: '',
        image: '/images/smart-car.png',
        roleIconClass: 'user',
        role: 'Experience Designer | Developer',
        date: '2017.03 - 2017.06',
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
      },
      {
        _id: 4,
        evenOrOddClass: 'oddContainer',
        name: "Personal Portfolio",
        companyLogo: '',
        image: '/images/portfolioProject.jpg',
        roleIconClass: 'user',
        role: ' Experience Designer | Developer | Web Analyst',
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
      },
      {
        _id: 5,
        evenOrOddClass: 'evenContainer',
        name: "Portfolio Web Analytics Dashboard",
        companyLogo: '',
        image: '/images/portfolioAnalytics.jpg',
        roleIconClass: 'user',
        role: 'Experience Designer | Developer | Web Analyst',
        date: '2016.07 - 2016.08',
        intro1: 'As my personal portfolio goes online, the live usage data comes in. But ' +
        'when I checked the data in Google Analytics, I found the data presentation was overly complicated ' +
        'and some of the reports, dimensions and metrics were not relevant to my website context.',
        intro2: 'So I decided to analyze the usage data by myself, then design and implement a customized web ' +
        'analytics dashboard to display the data in an easy to understand manner. Also it was a great practice to ' +
        'even further expand my realm of web knowledge – Interaction Design, Web Analytics, Data Visualization, Front-end and Back-end Implementation.',
        intro3: '',
        tools: ["Google Analytics","Google Analytics Core Reporting API","HighCharts", "NodeJS", "Express", "Google Cloud Platform API","Amazon Web Services EC2"],
        detailTemplate: "projects.portfoliowebanalytics"
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
