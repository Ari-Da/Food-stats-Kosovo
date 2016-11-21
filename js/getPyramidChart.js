/**
 * Created by Ari on 11/20/2016.
 */
function displayPyramidChart(year) {
    var percentages = [];

    $.ajax({
        url: '../../json/consumeData.json',
        async: false
    })
        .done(function (data) {

            $.each(data, function (key, emrat) {

                $.each(emrat, function (index, ob) {
                    //items.push( "<li id='" + index + "'>" + ob.viti + ", " + ob.perqindja + "</li>" );
                    if(ob.viti==year) {
                        percentages.push([key, parseFloat(ob.perqindja)]);
                    }
                });

            });

            percentages = percentages.sort(function(a, b){return b[1]-a[1]});
            getPyramidChart(year, percentages);
        });
}
