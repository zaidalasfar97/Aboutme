'use strict'



alert('Welcome to my page, This is some questions for you :)')

var username = prompt("Let's stast with what's' your name?")
alert("Hello " + username + " Nice to meet you");


var favColor = 'black';
function questionOne() {
    var color = prompt('Can you guess my favorite color?:P').toLocaleLowerCase();

    if (color == favColor) {
        alert('correct! black is my favorite color!');
    } else {
        alert('Oops! no ' + color + ' is not my favorite its Black');
    }
}

function questionTwo() {
    var know = prompt("would you like to get to know me ? (yes , no)").toLowerCase();

    if (know === 'yes') {
        alert('I am glad to know that :)');

    } else {
        alert('As you like :(');

    }

}

function questionThree() {
    var whereStudy = prompt("would you like to know where did i studied ? (yes , no)").toLowerCase();
    if (whereStudy === 'yes') {
        alert('Lovely :)');

    } else {
        alert(' Okay :(');

    }
}


function questionFour() {
    var whatGoals = prompt("would you like to know what is my goals? (yes , no)").toLowerCase();
    if (whatGoals === 'yes') {
        alert("Thats nice I will show you some of them")

    }
    else {
        alert("Your lose anyway :(")

    }
}


function questionFive() {
    var studyYears = prompt("would you like to know how many years did my education last? (yes , no)".toLowerCase());
    if (studyYears === 'yes') {
        alert("Okay I will tell you")
    }
    else {
        alert("Idont care too :(")
    }
}




questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();


var correctNumber = 14;
var totalGuessAttempts = 0;
var maxGuessAttempts = 4;



var userin;
var count = 0;
function try1() {
    for (var i = 4; i > 0; i--) {
        userin = prompt('Guess a Number between 10 and 16 : ' + i);
        userin = Number(userin);
        while (!(Number.isInteger(userin)) || userin == "") {
            userin = prompt('Guess a Number between 10 and 16 : ' + i);
            userin = Number(userin);
        }
        if (userin == correctNumber) {
            count++;
            correctAnswers++;

            alert("gzzz it's right");
            break;
        } else if (userin < correctNumber) {
            alert("higher");
        } else {
            alert("lower");
        }

    }
}
try1();






