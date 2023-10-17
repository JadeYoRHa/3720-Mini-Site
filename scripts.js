const xhr = new XMLHttpRequest();
const baseURL = "https://www.boredapi.com/api/"
var query = "activity?type=relaxation"
const url = baseURL + query;
var activityTYPE;

xhr.open("GET", url, true);
xhr.send(null);

xhr.onload = function () {
    activityTYPE = JSON.parse(xhr.responseText);
    console.log(activityTYPE.activity);
}

function change_text() {
    
    document.getElementById("demo").innerHTML = activityTYPE.activity;
}