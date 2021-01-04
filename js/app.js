'use strict'; // use strict mode to prevent doing mistakes 





    var username = prompt("What is your name?")
    alert(
        "Hello " + username
    );


var favColor = 'black';
var color = prompt('can you guess my favorite color?');

if (color.toLowerCase() === favColor) {
    alert('correct! black is my favorite color!');
} else {
    alert('Oops! no ' + color + ' is not my favorite');
}
console.log(color.toLowerCase());


    var userInput = prompt("would you like to get to know me ? (yes , no)");
    console.log(userInput);

    if (userInput.toLowerCase() === 'yes') {
        alert('I am glad to know that :)');

    } else {
        alert('As you like :(');

    }




    var userInput = prompt("would you like to know where did i studied ? (yes , no)");
    console.log(userInput);

    if (userInput.toLowerCase() === 'yes') {
        alert('Lovely :)');

    } else {
        alert(' Okay :(');

    }




    var userInput = prompt("would you like to know what is my goals? (yes , no)");
    console.log(userInput)
    if (userInput.toLowerCase() === 'yes') {
        alert("Thats nice I will show you some of them")

    }
    else {
        alert("Your lose anyway :(")

    }




    var userInput = prompt("would you like to know how many years did my education last? (yes , no)");
    console.log(userInput)
    if (userInput.toLowerCase() === 'yes') {
        alert("Okay I will tell you")

    }
    else {
        alert("Idont care too :(")

    }









