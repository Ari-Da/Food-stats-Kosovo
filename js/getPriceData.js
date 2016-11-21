/**
 * Created by Ari on 11/16/2016.
 */
var prices = [];

$.getJSON('../../json/priceData.json', function (data) {
    var objj = {};

    $.each( data, function( key, emrat ) {
        if(emrat.length>0) {
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
        }

        prices.push(objj);
    });
});
