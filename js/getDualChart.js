/**
 * Created by Ari on 11/19/2016.
 */
function getDualChart(data, name){
    var i = Math.floor((Math.random() * 5) + 1);
    if(i==1)
        i=0;
$('#container').highcharts({
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '<span id="titull" ">Krahasimi i përqindjes së konsumit me çmimin mesatar për kategorinë <b>' + name + '</b><span>'
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
            text: 'Përqindja e konsumit',
            style: {
                color: Highcharts.getOptions().colors[i]
            }
        },
        labels: {
            format: '{value} %',
            style: {
                color: Highcharts.getOptions().colors[i]
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
        x: -20,
        verticalAlign: 'top',
        y: 10,
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
        },
        color: Highcharts.getOptions().colors[i]

    }, {
        yAxis: 0,
        name: 'Çmimi mesatar',
        type: 'spline',
        data: data.average,
        tooltip: {
            valueSuffix: '€'
        },
        color: '#000000'
    }]
});
}