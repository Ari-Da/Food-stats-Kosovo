/**
 * Created by Ari on 11/19/2016.
 */
function myVal(val, type, name) {
    if(type=="Dual") {
        data = myData(val.value);
        getDualChart(data, name);
    }
    else if(type=="Pyramid") {
        displayPyramidChart(val);
    }
}