/**
 * Created by yunhaoshen on 7/31/16.
 */
'use strict';

angular.module('projectApp')
  /*.controller('MainCtrl', function () {
   this.awesomeThings = [
   'HTML5 Boilerplate',
   'AngularJS',
   'Karma'
   ];
   })*/

  .controller('PortfolioWebAnalyticsController', ['$scope', '$http' ,'workProjectIntroFactory', 'LineChartFactory', 'PieChartFactory', 'BarChartFactory','ColumnChartFactory','$state',function($scope, $http, workProjectIntroFactory, LineChartFactory, PieChartFactory,BarChartFactory,ColumnChartFactory, $state){
    var projects = workProjectIntroFactory.getProjects();
    $scope.project = projects[3];

    var host = "52.41.122.13:80";
    //var host = "192.168.1.4:3000";

    $('.portfolioDataDashboardContainer .step').click(function(){
      $('.portfolioDataDashboardContainer .step').removeClass('active');
      $(this).addClass('active');

    });
    //$('.step').tab();
    $('.portfolioDataDashboardContainer .step').tab({
      context: $('.portfolioDataDashboardContainer'),
      onFirstLoad: function(tabPath, parameterArray, historyEvent) {
        if (tabPath === 'geoLocation') {
          //if the data is not ready within 1000ms, display loader
          setTimeout(function(){
            if ($("#cityChart .chartCanvas").css('display') === 'none' && $("#cityChart .errorMessage").css('display') === 'none' ){
              $("#cityChart .loader").addClass('active');
            }
            if ($("#countryChart .chartCanvas").css('display') === 'none' && $("#countryChart .errorMessage").css('display') === 'none' ){
              $("#countryChart .loader").addClass('active');
            }

          },1000);

          //City Distribution
          $http({
            method: 'GET',
            url: 'http://' + host + '/geo-location/city',
          }).then(function successCallback(response) {
            console.log("CITY Success!!");
            console.log(response);

            var data = response.data;
            var transform_data = [];
            var totalVisits = 0, firstFiveVisits = 0;
            for (var i = 0; i< data.length; i++) {
              totalVisits = totalVisits + Number(data[i][1]);
            }
            if (data.length <= 5){
              for (var i = 0; i< data.length; i++) {
                transform_data.push({name:data[i][0],y:Number(data[i][1])});
              }
            }
            else {
              for (var i = 0; i< 5; i++) {
                transform_data.push({name:data[i][0],y:Number(data[i][1])});
                firstFiveVisits = firstFiveVisits + Number(data[i][1]);
              }
              transform_data.push({name:"Other",y:totalVisits - firstFiveVisits});
            }


            PieChartFactory .drawPieCharts('#cityChart .chartCanvas', 'CITY', transform_data, 'Number of Visits','#BBFFB0');
            $("#cityChart .chartCanvas").css('display','block');
            $("#cityChart .loader").removeClass('active');

            //$scope.aveDuration = SecondsTohhmmss(data[0][0]);
            // this callback will be called asynchronously
            // when the response is available
          }, function errorCallback(response) {
            console.log("CITY Error!!");
            console.log(response);
            $("#cityChart .loader").removeClass('active');
            $("#cityChart .errorMessage").css('display','block');

            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });

          //Country Distribution
          $http({
            method: 'GET',
            url: 'http://' + host + '/geo-location/country',
          }).then(function successCallback(response) {
            console.log("COUNTRY Success!!");
            console.log(response);

            var data = response.data;
            var transform_data = [];
            var totalVisits = 0, firstFiveVisits = 0;
            for (var i = 0; i< data.length; i++) {
              totalVisits = totalVisits + Number(data[i][1]);
            }
            if (data.length <= 5){
              for (var i = 0; i< data.length; i++) {
                transform_data.push({name:data[i][0],y:Number(data[i][1])});
              }
            }
            else {
              for (var i = 0; i< 5; i++) {
                transform_data.push({name:data[i][0],y:Number(data[i][1])});
                firstFiveVisits = firstFiveVisits + Number(data[i][1]);
              }
              transform_data.push({name:"Other",y:totalVisits - firstFiveVisits});
            }

            $("#countryChart .chartCanvas").css('display','block');
            $("#countryChart .loader").removeClass('active');
            PieChartFactory.drawPieCharts('#countryChart .chartCanvas', 'COUNTRY', transform_data, 'Number of Visits','#BBFFB0');


            //$scope.aveDuration = SecondsTohhmmss(data[0][0]);
            // this callback will be called asynchronously
            // when the response is available
          }, function errorCallback(response) {
            console.log("COUNTRY Error!!");
            console.log(response);
            $("#countryChart .loader").removeClass('active');
            $("#countryChart .errorMessage").css('display','block');

            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
        }
        if (tabPath === 'technology') {

          setTimeout(function(){
            if ($("#desktopBrowserChart .chartCanvas").css('display') === 'none' && $("#desktopBrowserChart .errorMessage").css('display') === 'none' ){
              $("#desktopBrowserChart .loader").addClass('active');
            }
            if ($("#desktopResolutionChart .chartCanvas").css('display') === 'none' && $("#desktopResolutionChart .errorMessage").css('display') === 'none' ){
              $("#desktopResolutionChart .loader").addClass('active');
            }
            if ($("#mobileOSChart .chartCanvas").css('display') === 'none' && $("#mobileOSChart .errorMessage").css('display') === 'none' ){
              $("#mobileOSChart .loader").addClass('active');
            }
            if ($("#mobileDeviceChart .chartCanvas").css('display') === 'none' && $("#mobileDeviceChart .errorMessage").css('display') === 'none' ){
              $("#mobileDeviceChart .loader").addClass('active');
            }
            if ($("#desktopVisits .value").css('opacity') === '0'){
              $("#desktopVisits .loader").addClass('active');
            }
            if ($("#mobileVisits .value").css('opacity') === '0'){
              $("#mobileVisits .loader").addClass('active');
            }

          },1000);


          //Device Category Distribution
          $http({
            method: 'GET',
            url: 'http://' + host + '/technology/device-category',
          }).then(function successCallback(response) {
            console.log("DEVICE CATEGORY Success!!");
            console.log(response);

            var data = response.data;
            var desktopVisits = 0, mobileVisits = 0;
            for (var i = 0; i< data.length; i++) {
              if (i === 0) {
                desktopVisits = Number(data[i][1]);
              }
              else {
                mobileVisits = mobileVisits + Number(data[i][1]);
              }
            }

            $scope.mobileVisits = mobileVisits;
            $scope.desktopVisits = desktopVisits;
            $("#desktopVisits .value").css('opacity','1');
            $("#desktopVisits .loader").removeClass('active');
            $("#mobileVisits .value").css('opacity','1');
            $("#mobileVisits .loader").removeClass('active');

            //$scope.aveDuration = SecondsTohhmmss(data[0][0]);
            // this callback will be called asynchronously
            // when the response is available
          }, function errorCallback(response) {
            console.log("DEVICE CATEGORY Error!!");
            console.log(response);
            $scope.desktopVisits = 'Error';
            $scope.mobileVisits = 'Error'
            $("#desktopVisits .value").css('opacity','0.05');
            $("#desktopVisits .loader").removeClass('active');
            $("#mobileVisits .value").css('opacity','0.05');
            $("#mobileVisits .loader").removeClass('active');




            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });

          //Desktop Browser Distribution
          $http({
            method: 'GET',
            url: 'http://' + host + '/technology/desktop-browser',
          }).then(function successCallback(response) {
            console.log("DESKTOP BROWSER Success!!");
            console.log(response);

            var data = response.data;
            var transform_data = [];
            var transform_data_2 = [];

            for (var i = 0; i< data.length; i++) {
              if (data[i][1] === 'desktop'){
                transform_data.push([data[i][0],data[i][2]]);
              }
            }

            var totalVisits = 0, firstFiveVisits = 0;
            for (var i = 0; i< transform_data.length; i++) {
              totalVisits = totalVisits + Number(transform_data[i][1]);
            }
            if (transform_data.length <= 5){
              for (var i = 0; i< transform_data.length; i++) {
                transform_data_2.push({name:transform_data[i][0],y:Number(transform_data[i][1])});
              }
            }
            else {
              for (var i = 0; i< 5; i++) {
                transform_data_2.push({name:transform_data[i][0],y:Number(transform_data[i][1])});
                firstFiveVisits = firstFiveVisits + Number(transform_data[i][1]);
              }
              transform_data_2.push({name:"Other",y:totalVisits - firstFiveVisits});
            }




            //console.log(transform_data)
            $("#desktopBrowserChart .chartCanvas").css('display','block');
            $("#desktopBrowserChart .loader").removeClass('active');
            PieChartFactory.drawPieCharts('#desktopBrowserChart .chartCanvas', 'DESKTOP BROWSER', transform_data_2, 'Number of Visits','#BBFFB0');


            //$scope.aveDuration = SecondsTohhmmss(data[0][0]);
            // this callback will be called asynchronously
            // when the response is available
          }, function errorCallback(response) {
            console.log("DESKTOP BROWSER Error!!");
            console.log(response);
            $("#desktopBrowserChart .loader").removeClass('active');
            $("#desktopBrowserChart .errorMessage").css('display','block');

            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });


          //Desktop Resolution Distribution
          $http({
            method: 'GET',
            url: 'http://' + host + '/technology/desktop-resolution',
          }).then(function successCallback(response) {
            console.log("DESKTOP RESOLUTION Success!!");
            console.log(response);

            var data = response.data;
            var transform_data = [];
            var transform_data_2 = [];

            for (var i = 0; i< data.length; i++) {
              if (data[i][1] === 'desktop'){
                transform_data.push([data[i][0],data[i][2]]);
              }
            }

            var totalVisits = 0, firstFiveVisits = 0;
            for (var i = 0; i< transform_data.length; i++) {
              totalVisits = totalVisits + Number(transform_data[i][1]);
            }
            if (transform_data.length <= 5){
              for (var i = 0; i< transform_data.length; i++) {
                transform_data_2.push({name:transform_data[i][0],y:Number(transform_data[i][1])});
              }
            }
            else {
              for (var i = 0; i< 5; i++) {
                transform_data_2.push({name:transform_data[i][0],y:Number(transform_data[i][1])});
                firstFiveVisits = firstFiveVisits + Number(transform_data[i][1]);
              }
              transform_data_2.push({name:"Other",y:totalVisits - firstFiveVisits});
            }

            console.log(transform_data_2)


            $("#desktopResolutionChart .chartCanvas").css('display','block');
            $("#desktopResolutionChart .loader").removeClass('active');
            PieChartFactory.drawPieCharts('#desktopResolutionChart .chartCanvas', 'DESKTOP SCREEN RESOLUTION', transform_data_2, 'Number of Visits','#BBFFB0');


            //$scope.aveDuration = SecondsTohhmmss(data[0][0]);
            // this callback will be called asynchronously
            // when the response is available
          }, function errorCallback(response) {
            console.log("DESKTOP RESOLUTION Error!!");
            console.log(response);
            $("#desktopResolutionChart .loader").removeClass('active');
            $("#desktopResolutionChart .errorMessage").css('display','block');

            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });

          //Mobile OS Distribution
          $http({
            method: 'GET',
            url: 'http://' + host + '/technology/mobile-os',
          }).then(function successCallback(response) {
            console.log("MOBILE OS Success!!");
            console.log(response);

            var data = response.data;
            var transform_data = [];

            for (var i = 0; i< data.length; i++) {
              if (data[i][0] === 'iOS'){
                transform_data.push({name:'iOS', y:Number(data[i][1])})
              }
              else if (data[i][0] === 'Android'){
                transform_data.push({name:'Android', y:Number(data[i][1])})
              }
            }

            console.log(transform_data)

            $("#mobileOSChart .chartCanvas").css('display','block');
            $("#mobileOSChart .loader").removeClass('active');
            PieChartFactory.drawPieCharts('#mobileOSChart .chartCanvas', 'MOBILE OPERATING SYSTEM', transform_data, 'Number of Visits','#FF99C6');


            //$scope.aveDuration = SecondsTohhmmss(data[0][0]);
            // this callback will be called asynchronously
            // when the response is available
          }, function errorCallback(response) {
            console.log("MOBILE OS Error!!");
            console.log(response);
            $("#mobileOSChart .loader").removeClass('active');
            $("#mobileOSChart .errorMessage").css('display','block');

            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });

          //Mobile Device
          $http({
            method: 'GET',
            url: 'http://' + host + '/technology/mobile-device',
          }).then(function successCallback(response) {
            console.log("MOBILE DEVICE Success!!");
            console.log(response);

            var data = response.data;
            var transform_data = [];
            var totalVisits = 0, firstFiveVisits = 0;
            for (var i = 0; i< data.length; i++) {
              totalVisits = totalVisits + Number(data[i][1]);
            }
            if (data.length <= 5){
              for (var i = 0; i< data.length; i++) {
                transform_data.push({name:data[i][0],y:Number(data[i][1])});
              }
            }
            else {
              for (var i = 0; i< 5; i++) {
                transform_data.push({name:data[i][0],y:Number(data[i][1])});
                firstFiveVisits = firstFiveVisits + Number(data[i][1]);
              }
              transform_data.push({name:"Other",y:totalVisits - firstFiveVisits});
            }


            $("#mobileDeviceChart .chartCanvas").css('display','block');
            $("#mobileDeviceChart .loader").removeClass('active');
            PieChartFactory.drawPieCharts('#mobileDeviceChart .chartCanvas', 'MOBILE DEVICE', transform_data, 'Number of Visits','#FF99C6');


            //$scope.aveDuration = SecondsTohhmmss(data[0][0]);
            // this callback will be called asynchronously
            // when the response is available
          }, function errorCallback(response) {
            console.log("MOBILE DEVICE Error!!");
            console.log(response);
            $("#mobileDeviceChart .loader").removeClass('active');
            $("#mobileDeviceChart .errorMessage").css('display','block');

            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
        }
        if (tabPath === 'page') {
          //if the data is not ready within 1000ms, display loader
          setTimeout(function(){
            if ($("#pageViewAnalysisChart .chartCanvas").css('display') === 'none' && $("#pageViewAnalysisChart .errorMessage").css('display') === 'none' ){
              $("#pageViewAnalysisChart .loader").addClass('active');
            }

          },1000);

          //PageView Analysis
          $http({
            method: 'GET',
            url: 'http://' + host + '/page-analysis/',
          }).then(function successCallback(response) {
            console.log("PageViewAnalysis Success!!");
            console.log(response);

            var data = response.data;
            var transform_data = [];
            var aboutMe = 0, projects = 0, photos = 0, videos = 0;
            for (var i = 0; i< data.length; i++) {
              if (data[i][0] === "/" || data[i][0].indexOf('aboutme') != -1) {
                aboutMe = aboutMe + Number(data[i][1])
              }
              else if (data[i][0].indexOf('projects') != -1) {
                projects = projects + Number(data[i][1])
              }
              else if (data[i][0].indexOf('photos') != -1) {
                photos = photos + Number(data[i][1])
              }
              else if (data[i][0].indexOf('videos') != -1) {
                videos = videos + Number(data[i][1])
              }

            }

            var xValue = ['ABOUT ME', 'WORK PROJECTS', 'PHOTOS', 'VIDEOS'];
            var yValue = [aboutMe,projects,photos,videos]


            //console.log(yValue)

            ColumnChartFactory .drawColumnCharts('#pageViewAnalysisChart .chartCanvas', 'PAGEVIEWS OF DIFFERENT PAGES', xValue, yValue, 'Number of PageViews');
            $("#pageViewAnalysisChart .chartCanvas").css('display','block');
            $("#pageViewAnalysisChart .loader").removeClass('active');

            //$scope.aveDuration = SecondsTohhmmss(data[0][0]);
            // this callback will be called asynchronously
            // when the response is available
          }, function errorCallback(response) {
            console.log("PageViewAnalysis Error!!");
            console.log(response);
            $("#pageViewAnalysisChart .loader").removeClass('active');
            $("#pageViewAnalysisChart .errorMessage").css('display','block');

            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });

        }
        if (tabPath === 'event') {
          //if the data is not ready within 1000ms, display loader
          setTimeout(function(){
            if ($("#EventAnalysisChart .chartCanvas").css('display') === 'none' && $("#EventAnalysisChart .errorMessage").css('display') === 'none' ){
              $("#EventAnalysisChart .loader").addClass('active');
            }

          },1000);

          //PageView Analysis
          $http({
            method: 'GET',
            url: 'http://' + host + '/event-analysis/',
          }).then(function successCallback(response) {
            console.log("EVENT ANALYSIS Success!!");
            console.log(response);

            var xValue = ['learn-more-about-me:button#click','download-resume:button#click','here-are-my-major-work:button#click','learn-more-executive dashboard:button#click',
            'learn-more-my agency reports:button#click','learn-more-personal portfolio:button#click','learn-more-portfolio web analytics dashboard:button#click',
            'see-my-great-photos:button#click','go-to-googlemap:link#click','watch-my-great-videos:button#click','facebook:icon#click','linkedin:icon#click','email:link#click'];
            var yValue = []
            for (var n = 0; n<xValue.length; n++) {
              yValue[n] = 0;
            }
            var data = response.data;
            for (var i = 0; i< data.length; i++) {
              for (var k = 0; k < xValue.length;k++) {
                //console.log(data[i][0])
                //console.log(xValue[k])
                if (data[i][0] === xValue[k]) {
                  yValue[k] = Number(data[i][1]);
                  //console.log(xValue[k])

                }
              }
            }

            //console.log(xValue)
            //console.log(yValue)

            ColumnChartFactory.drawColumnCharts('#EventAnalysisChart .chartCanvas', 'HITS OF DIFFERENT EVENTS', xValue, yValue, 'Number of Hits');
            $("#EventAnalysisChart .chartCanvas").css('display','block');
            $("#EventAnalysisChart .loader").removeClass('active');

            //$scope.aveDuration = SecondsTohhmmss(data[0][0]);
            // this callback will be called asynchronously
            // when the response is available
          }, function errorCallback(response) {
            console.log("EVENT ANALYSIS Error!!");
            console.log(response);
            $("#EventAnalysisChart .loader").removeClass('active');
            $("#EventAnalysisChart .errorMessage").css('display','block');

            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });

        }
      },
    });

    $('.portfolioDataAnalysisContainer .step').click(function(){
      $('.portfolioDataAnalysisContainer .step').removeClass('active');
      $(this).addClass('active');
    });

    $('.portfolioDataAnalysisContainer .step').tab({
      context: $('.portfolioDataAnalysisContainer'),

    });

    $scope.closeProjectDetail = function (index){
      $('.special.card .image').dimmer({
        on: 'hover'
      });

      $state.go('projects.summary');

    };
    $scope.$on('$stateChangeSuccess', function(event) {
      //console.log("asdasd");
      $scope.scrollToProject();
      //event.stopPropagation();
    });


    //if the data is not ready within 1000ms, display loader
    setTimeout(function(){
      if ($("#visitsChart .chartCanvas").css('display') === 'none' && $("#visitsChart .errorMessage").css('display') === 'none' ){
        $("#visitsChart .loader").addClass('active');
      }

      if ($("#keyMetricsVisits .value").css('opacity') === '0'){
        $("#keyMetricsVisits .loader").addClass('active');
      }

      if ($("#keyMetricsPageViews .value").css('opacity') === '0'){
        $("#keyMetricsPageViews .loader").addClass('active');
      }

      if ($("#keyMetricsDuration .value").css('opacity') === '0'){
        $("#keyMetricsDuration .loader").addClass('active');
      }

    },1000);

    //Visit Trend Chart
    $http({
      method: 'GET',
      url: 'http://' + host + '/key-metrics/trend',
    }).then(function successCallback(response) {
      console.log("TREND Success!!");
      console.log(response);
      var data = response.data;
      var xValue = [], yValue = [];

      for (var i = 0; i< data.length; i++) {
        data[i][1] = Number(data[i][1]);
        var dateString  = data[i][0];
        var month       = dateString.substring(4,6);
        var day         = dateString.substring(6,8);
        xValue[i] = month + "/" + day;
        yValue[i] = data[i][1]
      }
      //console.log(xValue)

      $("#visitsChart .chartCanvas").css('display','block');
      $("#visitsChart .loader").removeClass('active');
      //console.log(LineChartFactory)
      LineChartFactory.drawLineCharts('#visitsChart .chartCanvas', 'VISITS TREND', xValue, yValue, 'Number of Visits');

      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log("TREND Error!!");
      console.log(response);
      $("#visitsChart .loader").removeClass('active');
      $("#visitsChart .errorMessage").css('display','block');

      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

    //Total Visits
    $http({
      method: 'GET',
      //url: 'http://52.41.122.13:80/key-metrics/total-visits',
      url: 'http://' + host + '/key-metrics/total-visits',
    }).then(function successCallback(response) {
      console.log("TOTALVISITS Success!!");
      console.log(response);
      var data = response.data;
      $scope.totalVisits = data[0][0];
      $("#keyMetricsVisits .value").css('opacity','1');
      $("#keyMetricsVisits .loader").removeClass('active');
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log("TOTALVISITS Error!!");
      console.log(response);
      $scope.totalVisits = 'Error';
      console.log($scope.totalVisits);
      $("#keyMetricsVisits .value").css('opacity','0.05');
      $("#keyMetricsVisits .loader").removeClass('active');


      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

    //Pageviews per session
    $http({
      method: 'GET',
      //url: 'http://52.41.122.13:80/key-metrics/pages-per-visit',
      url: 'http://' + host + '/key-metrics/pages-per-visit',
    }).then(function successCallback(response) {
      console.log("PAGEVIEWS Success!!");
      console.log(response);
      var data = response.data;
      $scope.pagesPerVisit = Number(data[0][0]).toFixed(2);
      $("#keyMetricsPageViews .value").css('opacity','1');
      $("#keyMetricsPageViews .loader").removeClass('active');
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log("PAGEVIEWS Error!!");
      console.log(response);
      $("#keyMetricsPageViews .value").css('opacity','0.05');
      $("#keyMetricsPageViews .loader").removeClass('active');
      $scope.pagesPerVisit = 'Error';

      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

    var SecondsTohhmmss = function(totalSeconds) {
      //console.log(totalSeconds)
      var hours   = Math.floor(totalSeconds / 3600);
      var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
      var seconds = totalSeconds - (hours * 3600) - (minutes * 60);

      // round seconds
      seconds = Math.round(seconds)

      var result = (hours < 10 ? "0" + hours : hours);
      result += ":" + (minutes < 10 ? "0" + minutes : minutes);
      result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
      //console.log(result)
      //console.log("asdasdasdasdasdasdasdas");
      return result;
    };

    //Average Session Duration
    $http({
      method: 'GET',
      //url: 'http://52.41.122.13:80/key-metrics/ave-duration',
      url: 'http://' + host + '/key-metrics/ave-duration',
    }).then(function successCallback(response) {
      console.log("DURATION Success!!");
      console.log(response);

      var data = response.data;
      data = Number(data[0][0]);
      //console.log(data[0][0])

      $scope.aveDuration = SecondsTohhmmss(data);
      $("#keyMetricsDuration .value").css('opacity','1');
      $("#keyMetricsDuration .loader").removeClass('active');
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log("DURATION Error!!");
      console.log(response);
      $("#keyMetricsDuration .value").css('opacity','0.05');
      $("#keyMetricsDuration .loader").removeClass('active');
      $scope.aveDuration = 'Error';

      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });





  }]);



