/**
 *  The following code was provided and taken from the Highcharts website and has been modified
 * /
 * 
/**
 * This is a complex demo of how to set up a Highcharts chart, coupled to a
 * dynamic source and extended by drawing image sprites, wind arrow paths
 * and a second grid on top of the chart. The purpose of the demo is to inpire
 * developers to go beyond the basic chart types and show how the library can
 * be extended programmatically. This is what the demo does:
 *
 * - Loads weather forecast from www.yr.no in form of a JSON service.
 * - When the data arrives async, a TempRangeChart instance is created. We have
 *   created the TempRangeChart prototype to provide an organized structure of the
 *   different methods and subroutines associated with the demo.
 * - The parseYrData method parses the data from www.yr.no into several parallel
 *   arrays. These arrays are used directly as the data option for temperature,
 *   precipitation and air pressure.
 * - After this, the options structure is built, and the chart generated with
 *   the parsed data.
 * - On chart load, weather icons and the frames for the wind arrows are
 *   rendered using custom logic.
 */

function TempRangeChart(json, container) {
    // Parallel arrays for the chart data, these are populated as the JSON file
    // is loaded
    this.ranges = [];

    // Initialize
    this.json = json;
    this.container = container;

    // Run
    this.parseData();
}

/**
 * Build and return the Highcharts options structure
 */
TempRangeChart.prototype.getChartOptions = function () {
    return {
        chart: {
            type: 'arearange',
            marginBottom: 70,
            marginRight: 40,
            marginTop: 50,
            plotBorderWidth: 1,
            height: 310,
            alignTicks: false,
            scrollablePlotArea: {
                minWidth: 720
            }
        },
        title: {
            text: 'Temperature Ranges (Min, Max)',
            align: 'center',
            fontSize: '16px',
        },
        xAxis: {
            type: 'datetime',
        },
        yAxis: {
            title: {
                text: null
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '°F',
            xDateFormat: '%A, %b %e'
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Temperatures',
            data: this.ranges,
            lineColor: '#ffbf57',
            pointColor: '#3dc5ff',
            fillColor: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#ffbf57'],
                    [1, '#3dc5ff']
                ]
            }
        }]}
};

/**
 * Create the chart. This function is called async when the data file is loaded
 * and parsed.
 */
TempRangeChart.prototype.createChart = function () {
    this.chart = new Highcharts.Chart(this.container, this.getChartOptions());
};

TempRangeChart.prototype.error = function () {
    document.getElementById('loading').innerHTML =
        '<i class="fa fa-frown-o"></i> Failed loading data, please try again ' +
        'later';
};

/**
 * Handle the data. This part of the code is not Highcharts specific, but deals
 * with yr.no's specific data format
 */
TempRangeChart.prototype.parseData = function () {

    let pointStart;

    if (!this.json) {
        return this.error();
    }

    // Loop over hourly (or 6-hourly) forecasts
    this.json.data.timelines[0].intervals.forEach((node, i) => {

        const x = Date.parse(node.startTime);

        this.ranges.push({
            x,
            low: node.values.temperatureMin,
            high: node.values.temperatureMax
        });

        if (i === 0) {
            pointStart = (x) / 2;
        }
    });
    console.log(this.ranges);
    // Create the chart when the data is loaded
    this.createChart();
};

// Highcharts.chart('container', {
//     data: {
//         csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@b99fc27c/samples/data/temp-florida-bergen-2023.csv',
//         beforeParse: function (csv) {
//             return csv.replace(/\n\n/g, '\n');
//         }
//     },
//     chart: {
//         type: 'arearange',
//         zooming: {
//             type: 'x'
//         },
//         scrollablePlotArea: {
//             minWidth: 600,
//             scrollPositionX: 1
//         }
//     },
//     title: {
//         text: 'Temperature Ranges (Min, Max)',
//         align: 'center',
//         fontSize: '16px',
//     },
//     xAxis: {
//         type: 'datetime',
//     },
//     yAxis: {
//         title: {
//             text: null
//         }
//     },
//     tooltip: {
//         crosshairs: true,
//         shared: true,
//         valueSuffix: '°F',
//         xDateFormat: '%A, %b %e'
//     },
//     legend: {
//         enabled: false
//     },
//     series: [{
//         name: 'Temperatures',
//         color: {
//             linearGradient: {
//                 x1: 0,
//                 x2: 0,
//                 y1: 0,
//                 y2: 1
//             },
//             stops: [
//                 [0, '#f5b042'],
//                 [1, '#4287f5']
//             ]
//         }
//     }]
// });