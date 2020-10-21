// Question 1
for(var i = 15; i <= 25; i++)

if(i % 2 === 0) {
    console.log(i);
}

// Question 2 (Got help from teacher on Discord with this one)
var innerFunction = function () {
    console.log("I am a function");
};

function outerFunction(logSentence) {
    logSentence();
}

outerFunction(innerFunction);
