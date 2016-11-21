/**
 * Created by Ari on 11/19/2016.
 */
var years;

$.getJSON('../../json/years.json', function (data) {

    years = [];
    $.each( data, function( key, val ) {
       years.push(val);
    });

    localStorage.setItem("years", JSON.stringify(years));
});

