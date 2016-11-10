/**
 * Created by fletchermaffett on 11/1/16.
 */

//Playing with Objects #1
/*
var deacs = {
    school: "Wake Forest University",
    enrollment: 5000,
    city: "Winston-Salem, NC",
    admissions {
        undergraduate: 20000,
        graduate: 10000,
        address: "5 Deacs Drive, NC 22789",
        currentTuition: 38000,
    },
    mascot: "Demon Deacon",
    founded: 1834,
    headMaster: "who knows",
    hasFootballTeam: "Yes",
    sports: ["wrestling", "hockey", "basketball", "lacrosse"],
    gradRate: 0.89
};

console.log(deacs.admissions.currentTuition);
deacs.enrollment = 6000;

var fakeDeacs = {};
Object.assign(fakeDeacs.deacs);

console.log(fakeDeacs.enrollment);
*/


//Playing with Objects #2 --> battle example
var Soldier = function (name, army, rank) {
    this.name = name;
    this.army = army;
    this.rank = rank;
    this.issueOrder = function (command) {
        console.log("I am " + this.name + ", a " + this.rank + " in the " + this.army +
            " Army, and I command you to " + command);
    }
}

var grant = new Soldier("Ulysses S. Grant", "Union", "Brigadier General");

grant.issueOrder("outflank the enemy lines due East of here.");
grant.issueOrder("get to the chopper!");


//Playing with Monkeys
var Monkey = function(name, species) {
    this.name       = name;
    this.species    = species;
    this.foodsEaten = [];
    this.eatSomething = function(food) {
        this.foodsEaten.push(food);
    }
    this.introduce = function() {
        console.log("My name is "+ this.name +". I come from the "+ this.species + " family. I have eaten "+ this.foodsEaten.join(", ") + ".");
    }
};

var monkey1 = new Monkey("Jack", "Howler");
monkey1.eatSomething("banana");
monkey1.introduce();

var monkey2 = new Monkey("James", "Pygmy Marmoset");
monkey2.eatSomething("peach");
monkey2.eatSomething("plum");
monkey2.introduce();

var monkey3 = new Monkey("James", "Squirrel Monkey");
monkey3.eatSomething("pineapple");
monkey3.introduce();

// Getting properties using the dot syntax / bracket syntax
console.log(monkey1.name);
console.log(monkey1["name"]);