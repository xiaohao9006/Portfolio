/**
 * Created by yunhaoshen on 7/31/16.
 */
'use strict';
angular.module('projectApp')
  .factory('PieChartFactory',function(){
    var gridColor = "#403F49";
    var pieChartFac = {};
    pieChartFac.drawPieCharts = function (elem, title, data, seriesName,color){
      /*Highcharts.getOptions().plotOptions.pie.colors = (function () {
        var colors = [],
          base = color,
          i;

        for (i = 0; i < 14; i += 1) {
          // Start out with a darkened base color (negative brighten), and end
          // up with a much brighter color
          colors.push(Highcharts.Color(base).brighten((i - 3) / 11).get());
        }
        //console.log(colors);
        return colors;
      }());*/

      var i;
      var colors = [];
      var base = color;

      for (i = 0; i<data.length; i++) {
        data[i].color = Highcharts.Color(base).brighten((i - 3) / 11).get();
      }


      $(function () {
        $(elem).highcharts({
          chart: {
            backgroundColor: '#2d2c33',
            //marginLeft: 80,
            //marginRight: 80,
            marginBottom: 90,
            type: 'pie'
          },

          title: {
            text: title,
            //x: -20 //center
            y: 30,
            margin: 40,
            style: {'color': 'rgba(255,255,255,.9)'}
          },
          credits: {
            enabled: false
          },
          tooltip: {
            //pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: false,
              cursor: 'default',
              dataLabels: {
                enabled: false,

              },
              showInLegend: true,
            }
          },
          legend: {
            //layout: 'vertical',
            //align: 'right',
            //verticalAlign: 'middle',
            //enabled: false,
            itemStyle: {'color': '#f2f2f2','font-weight':'200'},
            itemHoverStyle: {
              color: '#f2f2f2',
              'font-weight':'200'
            },
            borderWidth: 0,
            itemMarginTop: 3,
            navigation: {
              enabled: false
            }
          },
          series: [{
            name: seriesName,
            data: data,
            //color: '#BBFFB0'
            point: {
              events: {
          legendItemClick: function () {
            return false; // <== returning false will cancel the default action
          }
        }
            }
          }]
        });
      });


    };

    return pieChartFac;
  });
