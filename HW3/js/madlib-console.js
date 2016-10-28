var startupX = ['Uber', 'Augmedix', 'WeGo', 'Lyft', 'Zappos', 'CraigsList', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Inform', 'Microsoft'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'HipChat', 'GitHub', 'NetBeans', 'Maps', 'Yelp', 'Epicurious'];

var favorites = [];
var startupIdea;

document.getElementById("create").onclick = function() {createStartup()};
document.getElementById("save").onclick = function() {saveStartupIdea()};
document.getElementById("print").onclick = function() {printFavorites()};

var startupIdeas = [];

function createStartup() {

    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));

    console.log(startupX);
    console.log(startupY);

    startupIdea = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + '.';

    document.getElementById('xForY').innerHTML = startupIdea;
}

function saveStartupIdea() {
    favorites.push(startupIdea);
    console.log(favorites);
}

function printFavorites() {
    document.getElementById('favorites').innerHTML = '';
    for (i = 0; i < favorites.length; i++) {
        document.getElementById('favorites').innerHTML += favorites[i] + '<br />';
    }
}