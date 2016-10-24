/**
 * Created by fletchermaffett on 10/13/16.
 */

var x = 37;

if(x > 0 && x < 16) {
    console.log("You cannot do much outside of going to school.");
} else if(x >= 16 && x < 18) {
    console.log("You can drive.");
} else if(x >= 18 && x < 21) {
    console.log("You can vote.");
} else if(x >=21 && x < 25) {
    console.log("You can drink alcohol.");
} else if(x >=25 && x < 35) {
    console.log("You can rent a car.");
} else if(x >=35 && x < 62) {
    console.log("You can run for president.");
} else {
    console.log("You are eligible for social security benefits.");
}


for (var y = 0; y <= 100; y++) {
    if (y % 3 == 0 && y % 5 == 0) {
        console.log("FizzBuzz.")
    } else if (y % 3 == 0) {
        console.log("Fizz.")
    } else if (y % 5 == 0) {
        console.log("Buzz.")
    } else {
        console.log(y);
    }
}