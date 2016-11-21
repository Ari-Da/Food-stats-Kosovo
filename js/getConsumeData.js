/**
 * Created by Ari on 11/16/2016.
 */

function displayChart() {
    var myFinal = [];
    var prices = [];
    /*
     $.getJSON('../../json/consumeData.json', function (data) {
     var objj = {};
     var i = 0;

     $.each( data, function( key, emrat ) {
     if(i>3) {
     objj = {
     'visible': false,
     'name': key,
     'data': []
     };
     }
     else {
     objj = {
     'name': key,
     'data': []
     };
     }

     $.each(emrat, function (index, ob) {
     /!*items.push( "<li id='" + index + "'>" + ob.viti + ", " + ob.perqindja + "</li>" );*!/
     objj.data.push({
     'name': ob.viti,
     'y': (ob.perqindja/10),
     'drilldown': (ob.id+"-"+ob.viti)
     });
     });

     myFinal.push(objj);
     i++;
     });
     });*/

    $.ajax({
        url: '../../json/consumeData.json',
        async: false
    })
        .done(function (data) {
            var objj = {};
            var i = 0;

            $.each(data, function (key, emrat) {
                if (i > 3) {
                    objj = {
                        'visible': false,
                        'name': key,
                        'data': []
                    };
                }
                else {
                    objj = {
                        'name': key,
                        'data': []
                    };
                }

                $.each(emrat, function (index, ob) {
                    //items.push( "<li id='" + index + "'>" + ob.viti + ", " + ob.perqindja + "</li>" );
                    if(ob.mesatarja>0)
                        objj.data.push({
                            'name': ob.viti,
                            'y': (ob.perqindja / 10),
                            'label': ob.perqindja,
                            'drilldown': (ob.id + "-" + ob.viti)
                        });
                    else
                        objj.data.push({
                            'name': ob.viti,
                            'y': (ob.perqindja / 10),
                            'label': ob.perqindja
                        });
                });

                myFinal.push(objj);
                i++;

            });

            // for drilldown

            $.ajax({
                url: '../../json/priceData.json',
                async: false
            })
                .done(function (data) {

                    var objj = {};

                    $.each(data, function (key, emrat) {
                        objj = {
                            tooltip: {
                                pointFormat: '<span style="color:{series.color}"></span><b>{point.y} euro</b><br/>'
                            },
                            stacking: 'normal',
                            'name': key,
                            'id': key,
                            'data': []
                        };

                        $.each(emrat, function (index, ob) {
                            /*items.push( "<li id='" + index + "'>" + ob.viti + ", " + ob.perqindja + "</li>" );*/
                            objj.data.push([ob.emri, parseFloat(ob.qmimi)]);
                        });

                        prices.push(objj);
                    });
                });

            getStackedChart(myFinal, prices);
        });
}
