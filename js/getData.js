/**
 * Created by Ari on 11/19/2016.
 */
function myData (myVal) {
    var percentage = [];
    var mesatarja=[];
    /*$.getJSON('../../json/consumeData.json', function (data) {
        var objj = {};
        var i = 0;

        $.each(data, function (key, emrat) {
                $.each(emrat, function (index, ob) {
                    /!*items.push( "<li id='" + index + "'>" + ob.viti + ", " + ob.perqindja + "</li>" );*!/
                    if(ob.id == myVal)
                        if (ob.mesatarja > 0)
                            percentage.push(parseInt(ob.perqindja));
                });
        });
        localStorage.setItem("percentage", JSON.stringify(percentage));
    });*/
    $.ajax({
        url: '../../json/consumeData.json',
        async: false
    })
        .done(function( data ) {
            $.each(data, function (key, emrat) {
                $.each(emrat, function (index, ob) {
                    if(ob.id == myVal)
                        if (ob.mesatarja > 0) {
                            percentage.push(parseInt(ob.perqindja));
                            mesatarja.push(ob.mesatarja);
                        }

                });
            });
            localStorage.setItem("percentage", JSON.stringify(percentage));
            localStorage.setItem("average", JSON.stringify(mesatarja));
        });


    return {
        'percentage': percentage,
        'average': mesatarja
    };
}
