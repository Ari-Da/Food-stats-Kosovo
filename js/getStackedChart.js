/**
 * Created by Ari on 11/19/2016.
 */
function getStackedChart(consumeData, drilldownData) {
    var chart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked column chart'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Konsumimi'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.label}%</b><br/>'
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: JSON.parse(JSON.stringify(consumeData)),

        drilldown: {
            series: JSON.parse(JSON.stringify(drilldownData)),
            drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    align: 'right'
                },
                theme: {
                    fill: 'white',
                    'stroke-width': 1,
                    stroke: 'silver',
                    r: 0,
                    states: {
                        hover: {
                            fill: '#a4edba'
                        },
                        select: {
                            stroke: '#039',
                            fill: '#a4edba'
                        }
                    }
                }
            }
        },

        exporting: {
            buttons: {
                contextButton: {
                    align: 'left'
                },

                customButton: {
                    id: 'myBtn',
                    text: 'Inverted',
                    onclick: function () {
                        var self = this.exportSVGElements[2]; // 0-1 is first button, 2-3 is second button etc.
                        var tekst = self.text.textStr;
                        if(tekst=="Plain") {
                            chart.update({
                                chart: {
                                    inverted: false,
                                    polar: false
                                },
                                subtitle: {
                                    text: 'Plain'
                                }
                            });
                            this.exportSVGElements[2].text.textStr="Inverted";
                        } else if(tekst=="Inverted") {
                            chart.update({
                                chart: {
                                    inverted: true,
                                    polar: false
                                },
                                subtitle: {
                                    text: 'Inverted'
                                }
                            });
                            this.exportSVGElements[2].text.textStr="Plain";
                        }
                        console.log(self.text);
                    },
                    x: -30,
                    y: 10,
                    theme: {
                        fill: 'white',
                        'stroke-width': 1,
                        stroke: 'silver',
                        r: 3,
                        states: {
                            hover: {
                                fill: '#a4edba'
                            },
                            select: {
                                stroke: '#039',
                                fill: '#a4edba'
                            }
                        }
                    }
                }
            }
        }
    });
}
