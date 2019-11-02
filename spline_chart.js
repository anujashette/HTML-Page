
window.onload = function () {
    var chart = Highcharts.chart('container_spline', {
        chart: {
            type: 'areaspline',
            height: '180',
            width: '250'
        },
        title: {
            text: ''
        },
        legend: {
            enabled: false,
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        },
        xAxis: {
            categories: [

            ],
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: '#ffffff'
            }]
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'John',
            data: [5, 12, 8, 12, 16, 10, 16],
        }, {
            name: 'Jane',
            data: [2, 5, 3, 6, 9, 7, 10],
        }]
    });
    chart.render();

    var lineChart = Highcharts.chart('container', {
        chart: {
            height:'220',
            width:'260'
        },
        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },

        yAxis: {
            title: {
                text: ''
            }
        },
        legend: {
            enabled:false,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },

        series: [{
            name: 'Installation',
            data: [43934, 110069, 57177, 69658, 97031, 119931]
        }, {
            name: 'Manufacturing',
            data: [0, 110069, 29742, 90000, 150000, 100000]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 400
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
    lineChart.render();
}








