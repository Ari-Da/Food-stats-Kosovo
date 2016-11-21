/**
 * Created by Ari on 11/19/2016.
 */
function getChart(data){
$('#container').highcharts({
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Krahasimi i përqindjes së konsumit me çmimin mesatar'
    },
    subtitle: {
        text: 'Source: aksdata.rks-gov.net'
    },
    xAxis: [{
        categories: JSON.parse(localStorage.getItem("years")),
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}€',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Çmimi mesatar',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Konsumi',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} %',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
        yAxis: 1,
        name: 'Përqindja e konsumit',
        type: 'column',
        data: data.percentage,
        tooltip: {
            valueSuffix: ' %'
        }

    }, {
        yAxis: 0,
        name: 'Mesatarja',
        type: 'spline',
        data: data.average,
        tooltip: {
            valueSuffix: '€'
        }
    }]
});}