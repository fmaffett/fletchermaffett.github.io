var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Inform', 'Microsoft'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

document.getElementById("create").onclick = function() {myFunction()};

function myFunction() {
    document.getDocumentById("xForY").innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
}

/*
function myFunction2() {
    document.getDocumentById("favorites").innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
}
*/
