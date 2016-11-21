/**
 * Created by Ari on 11/20/2016.
 */
function getPyramidChart(year, percentages) {
    var chart = Highcharts.chart('container', {
        chart: {
            type: 'pyramid',
            marginRight: 100
        },
        title: {
            text: 'Consume distribution for year ' + year,
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f}%)',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                }
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Consume percentage',
            data: percentages
            /*tooltip: {
                pointFormat: '<span style="background-image: url(../img/rotate.png)"</span> {series.name}: <b>{point.y}</b><br/>'
            }*/
        }]
    });
}
