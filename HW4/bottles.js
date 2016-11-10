/**
 * Created by fletchermaffett on 11/7/16.
 */

function createList() {
    for(var i = 99; i >= 0; i--) {
        var itemString;
        if(i >= 1) {
            itemString = (i + " bottles of beer on the wall, " +
                i + " bottles of beer.  Take one down, pass it around, " +
                (i-1) + " bottles of beer on the wall.");
        } else if(i == 1) {
            itemString = (i + " bottle of beer on the wall, " +
                i + " bottle of beer.  Take one down, pass it around, " +
                "No more bottles of beer on the wall.");
        } else {
            itemString = ("No more bottles of beer on the wall, " +
                "no more bottles of beer. Go to the store, buy some more, " +
                "99 bottles of beer on the wall.");
        }
        $("#bottles-list").append("<li>" + itemString + "</li>");
    }
}

window.onload = function() {
    // when someone clicks the button...
    $("#bottles-button").on("click", function() {
        createList();
    });
}