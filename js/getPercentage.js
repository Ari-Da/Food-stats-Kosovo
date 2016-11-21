/**
 * Created by Ari on 11/19/2016.
 */
function percentage (myVal) {
    var percentage = [];
    $.getJSON('../../json/consumeData.json', function (data) {
        var objj = {};
        var i = 0;

        $.each(data, function (key, emrat) {
                $.each(emrat, function (index, ob) {
                    /*items.push( "<li id='" + index + "'>" + ob.viti + ", " + ob.perqindja + "</li>" );*/
                    if(ob.id == myVal)
                        if (ob.mesatarja > 0)
                            percentage.push(parseInt(ob.perqindja));
                });
        });
        localStorage.setItem("percentage", JSON.stringify(percentage));
    });
}
