/**
 * Created by Ari on 11/19/2016.
 */
var categories;

$.getJSON('../../json/consumeData.json', function (data) {

    categories = [];
    $.each( data, function( key, val ) {
        categories.push({
            'name': key,
            'id': val[0].id
        });
    });

    localStorage.setItem("categories", JSON.stringify(categories));
});
