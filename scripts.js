const xhr = new XMLHttpRequest();
const baseURL = "https://www.boredapi.com/api/"
var query = "activity?type=relaxation"
const url = baseURL + query;

xhr.open("GET", url, true);
xhr.send(null);

xhr.onload = function () {
    console.log("it worked");
    let activityCOST = JSON.parse(xhr.responseText);
    console.log(activityCOST);
}