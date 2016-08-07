/**
 * Created by yunhaoshen on 8/6/16.
 */
/**
 * Created by yunhaoshen on 8/6/16.
 */
/**
 * Created by yunhaoshen on 7/31/16.
 */
'use strict';
angular.module('projectApp')
  .factory('ColumnChartFactory',function(){
    var gridColor = "#403F49";
    var columnChartFac = {};
    columnChartFac.drawColumnCharts = function (elem, title, xValue, yValue, seriesName){
      $(function () {
        $(elem).highcharts({
          chart: {
            backgroundColor: '#2d2c33',
            //marginLeft: 80,
            //marginRight: 80,
            marginBottom: 90,
            type:'bar'
          },
          plotOptions: {
            series: {
              events: {
                legendItemClick: function () {
                  return false; // <== returning false will cancel the default action
                }
              }
            }
          },

          title: {
            text: title,
            //x: -20 //center
            y: 30,
            margin: 40,
            style: {'color': 'rgba(255,255,255,.9)'}
          },
          xAxis: {
            tickColor: gridColor,
            lineColor: gridColor,
            categories: xValue,
            crosshair: true
          },
          credits: {
            enabled: false
          },
          yAxis: {
            title: {
              enabled: false
            },
            gridLineColor: gridColor

          },
          tooltip: {
            //valueSuffix: '°C'
            shared: true
          },
          legend: {
            //layout: 'vertical',
            //align: 'right',
            //verticalAlign: 'middle',
            //enabled: false,
            itemStyle: {'color': '#f2f2f2', 'font-weight':'200'},
            itemHoverStyle: {
              color: '#f2f2f2',
              'font-weight':'200'
            },
            borderWidth: 0,
            itemMarginTop: 30,
            navigation: {
              enabled: false
            }
          },
          series: [{
            name: seriesName,
            data: yValue,
            color: '#BBFFB0'
          }]
        });
      });


    };

    return columnChartFac;
  });
