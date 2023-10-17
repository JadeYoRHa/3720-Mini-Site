const xhr = new XMLHttpRequest();
const baseURL = "https://www.boredapi.com/api/"
var query = "activity?participants=4"
var index = 2
var activityTYPE;

//Editing Site On Click



function changeQueryRecharge() {
    query = "activity?type=relaxation";
    callAPI();
    //I want to trigger the charging animation of the furthest empty bar
    
}

function changeQueryDeplete() {
    query = "activity?participants=4"
    callAPI();
    //I want to reverse the charging animation of the furthest full bar
    const element= document.getElementsByClassName("inner")
    element[index].style.animationFillMode = "backwards";
    // element[index].style.animationDirection = "reverse";
    element[index].style.visibility = "hidden";
    index --
}

// API functionality

function callAPI() {
    let url = baseURL + query;
    xhr.open("GET", url, true);
    xhr.send(null);
}

xhr.onload = function () {
    activityTYPE = JSON.parse(xhr.responseText);
    console.log(activityTYPE.activity);
    change_text();
}

function change_text() {
    document.getElementById("activityText").innerHTML = activityTYPE.activity;
    console.log(query);
}

console.log(query);