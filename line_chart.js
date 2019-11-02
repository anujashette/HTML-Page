window.onload = function () {
    var lineChart = Highcharts.chart('container', {
        chart: {
            
            height:'200',
            width:'250'
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