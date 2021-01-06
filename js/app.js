'use strict'

var score = 0;

alert('Welcome to my page, This is some questions for you :)')

var username = prompt("Let's stast with what's' your name?")
alert("Hello " + username + " Nice to meet you");




    var color = prompt('Can you guess that is Black is my favorite?:P').toLocaleLowerCase();

    if (color === 'yes') {
        alert('correct! black is my favorite color!');
        score++
    } else {
        alert('Oops! wrong answre');
    }


    var know = prompt("would you like to get to know me ? (yes , no)").toLowerCase();

    if (know === 'yes') {
        alert('I am glad to know that :)');
        score++
    } else {
        alert('As you like :(');

    }




    var whereStudy = prompt("would you like to know where did i studied ? (yes , no)").toLowerCase();
    if (whereStudy === 'yes') {
        alert('Lovely :)');
        score++
    } else {
        alert(' Okay :(');

    }




    var whatGoals = prompt("would you like to know what is my goals? (yes , no)").toLowerCase();
    if (whatGoals === 'yes') {
        alert("Thats nice I will show you some of them")
        score++
    }
    else {
        alert("Your lose anyway :(")

    }




    var studyYears = prompt("would you like to know how many years did my education last? (yes , no)".toLowerCase());
    if (studyYears === 'yes') {
        alert("Okay I will tell you")
        score++
    }
    else {
        alert("Idont care too :(")
    }






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






