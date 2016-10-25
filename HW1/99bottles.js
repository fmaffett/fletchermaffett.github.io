/**
 * Created by fletchermaffett on 10/24/16.
 */

//Write out the lyrics of 99 bottles song via console.log

//for (var j = 3; j > -1; j--) {
    for (var i = 99; i > -1; i--) {
        if (i > 1) {
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. " +
                "Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
        } else if(i == 1) {
            console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. " +
                "Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
        } else {
            console.log("No more bottles of beer on the wall, no more bottles of beer. " +
                "Go to the store and buy some more, " + 99 + " bottles of beer on the wall.");
        }
    }
//}