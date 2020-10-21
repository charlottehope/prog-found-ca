// Question 1
var animal = "cat";

// Question 2
var person = {
    name: "Charlotte",
    age: "27",
};

// Question 3
var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

// Question 4
var numberArray = [7,14,21,28,35];

console.log(numberArray.length);

for(var i=0; i < numberArray.length; i++){
    console.log(numberArray[i]);
}

// Question 5
for(var i = 15; i <= 25; i++) {
    console.log(i);
}

// Question 6
for(var i = 15; i <= 25; i++)

if(i === 20) {
    console.log(i);
}

// Question 7
var peopleArray = [
    {
    name: "Kevin",
    age: 49,
    over40: true
    },
    {
    name: "Lisa",
    age: 22,
    over40: false
    }
    ];

    for(var i=0; i < peopleArray.length; i++){
        console.log(peopleArray[i].age);
        console.log(peopleArray[i].over40);
    }

// Question 8
function whatIDontLike(creepyAnimal) {
    console.log("I don't like " + creepyAnimal);
}

whatIDontLike("spiders");

// Question 9
function subtractNumbers(number1, number2) {
    var sum = number1 - number2;
    console.log(sum);
}

subtractNumbers(25, 3);

// Question 10 (The question did not say to add console.log at the end, but felt it was implied to add this as well.)
var emptyArray = [];

function addToArray(name) {
    emptyArray.push(name);
}
addToArray("Michael");
console.log(emptyArray);