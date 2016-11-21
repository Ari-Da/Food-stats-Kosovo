/**
 * Created by Ari on 11/19/2016.
 */
function myVal(val, type, name) {
    var doc = document.getElementById('category');
    //doc.options[doc.options.selectedIndex].selected = true;
    //alert(localStorage.getItem("percentage"));

    if(type=="Dual") {
        data = myData(val.value);
        getDualChart(data, name);
    }
    else if(type=="Pyramid")
        displayPyramidChart(val);
}