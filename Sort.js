/**
 * Created by fletchermaffett on 10/27/16.
 */


var randList = [98, 65, 42, 23, 1, 2, 5, 6, 8, 3, 0, 76, 4, 567, 53, 2];

function sortNumbers(array) {
    var sortedList = array.sort(function(a,b){
        return a > b;
    });
    console.log(sortedList);
    var high = sortedList[sortedList.length-1];
    return high;
}

console.log(sortNumbers(randList));