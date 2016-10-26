var startupX = ['Uber', 'Augmedix', 'WeGo', 'Lyft', 'Zappos', 'CraigsList', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Inform', 'Microsoft'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'HipChat', 'GitHub', 'NetBeans', 'Maps', 'Yelp', 'Epicurious'];

document.getElementById("create").onclick = function() {myFunction()};

function myFunction() {

    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));

    console.log(startupX);
    console.log(startupY);

    document.getElementById('xForY').innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + '.';
}
