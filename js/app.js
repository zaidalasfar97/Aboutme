'use strict';

// Lab 02

var username = prompt('Welcome here , What is your name ');
alert('Welcome her ' + username)



var Uage = prompt('Are you over 18 years old ');

if (Uage.toLowerCase() === 'yes' || Uage.toUpperCase() === 'yes' || Uage.toLowerCase() === 'y' || Uage.toUpperCase() === 'y') {
  alert('You are over 18 years old ');
} else {
  alert('You are under 18 years old ');
}
// console.log(Uage);

var Uscholl = prompt('Are you studing in shcool?');

if (Uscholl.toLowerCase() === 'yes' || Uscholl.toUpperCase() === 'yes' || Uscholl.toLowerCase() === 'y' || Uscholl.toUpperCase() === 'y') {
  alert('You are in school');
} else {
  alert('You are not in  school');

}

// console.log(Uscholl);


var Uuni = prompt('Are you in University ? ');

if (Uscholl.toLowerCase() === 'yes' || Uscholl.toUpperCase() === 'yes' || Uscholl.toLowerCase() === 'y' || Uscholl.toUpperCase() === 'y') {
  alert('You are in University');
} else {
  alert('You are not in  Unviersity');

}

//console.log(Uuni);


var animals = prompt('Do you love dog?');

if (animals.toLowerCase() === 'yes' || animals.toUpperCase() === 'yes' || animals.toLowerCase() === 'y' || animals.toUpperCase() === 'y') {
  alert('Wow , you love dogs ');
} else {
  alert('Ohh , you arent love dogs ');

}

// console.log(animals);


var cats = prompt('Do you love cats ?');

if (cats.toLowerCase() === 'yes' || cats.toUpperCase() === 'yes' || cats.toLowerCase() === 'y' || cats.toUpperCase() === 'y') {
  alert('Wow , you love cats ');
} else {
  alert('Ohh , you arent love cats');

}

//console.log(cats);


// Lab03 


var userNum = prompt('Please guess number');

for (var i = 0; i < 4; i++) {

  while (userNum === '' || userNum === null || userNum === undefined) {
    userNum = prompt('Please guess the number')

  }

  if (userNum < 10) {
    alert('Too low');
    userNum = prompt('Please guess another number');

  } else if (userNum > 10) {
    alert('Too high');
    userNum = prompt('Please guess another number');

  } else {
    alert('This answer is correct');
    i = i + 5
  }

}

// this wan have uncorrect code 


// var score = 0
// var multinum = [1, 2, 3, 4];
// var userinput = prompt('Please guess the number')

// for (var x = 0; x < 6; x++) {
//   while (userinput === '' || userinput === null || userinput === undefined) {
//     userinput = prompt('Please guess the number');
    

//   }

//   for (var i = 0; i <= multinum.length; i++) {
//     if (parseInt(userinput) === multinum[i]) {
//       break

//       alert('This number is correct');
//       score++;

//     } else {
//       alert('This number is uncorrect');
//     }


// }






