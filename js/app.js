'use strict';

// Lab 02
var sco =0

var username = prompt('Welcome here , What is your name ');
alert('Welcome her ' + username)

function question(userInput,sucessMessage,wrongMessage){
  if (userInput.toLowerCase() === 'yes' || userInput.toUpperCase() === 'yes' || userInput.toLowerCase() === 'y' || userInput.toUpperCase() === 'y') {
    alert(sucessMessage);
    sco++
  } else {
    alert(wrongMessage);
    
  
  
  }
}


/*function Age(myAge){
  if (myAge.toLowerCase() === 'yes' || myAge.toUpperCase() === 'yes' || myAge.toLowerCase() === 'y' || myAge.toUpperCase() === 'y') {
    alert('You are over 18 years old ');
    sco++
  } else {
    alert('You are under 18 years old ');
  }
}  */

var Uage = prompt('Are you over 18 years old ');
question(Uage,'You are over 18 years old ','You are under 18 years old ')


// console.log(Uage);



//if (myschool.toLowerCase() === 'yes' || myschool.toUpperCase() === 'yes' || myschool.toLowerCase() === 'y' || myschool.toUpperCase() === 'y') {
  //alert('You are in school');

//} else {
//  alert('You are not in  school');
///  sco++


//}

var Uschool = prompt('Are you studing in shcool?');
question(Uschool,'You are in school','You are not in  school')


// console.log(Uscholl);
/*function myuni(Uuni){
  if (Uuni.toLowerCase() === 'yes' || Uuni.toUpperCase() === 'yes' || Uuni.toLowerCase() === 'y' || Uuni.toUpperCase() === 'y') {
    alert('You are in University');
  } else {
    alert('You are not in  Unviersity');
    sco++
  
  
  }
}*/

var youruni = prompt('Are you in University ? ');
question(youruni,'You are in University','You are not in  Unviersity')


//console.log(Uuni);
/*function loveanimals(animals){
  if (animals.toLowerCase() === 'yes' || animals.toUpperCase() === 'yes' || animals.toLowerCase() === 'y' || animals.toUpperCase() === 'y') {
    alert('Wow , you love dogs ');
  } else {
    sco++
  
    alert('Ohh , you arent love dogs ');
  
  }
  
}*/

var doyoulove = prompt('Do you love dog?');
question(doyoulove,'Wow , you love dogs ','Ohh , you arent love dogs ')


// console.log(animals);




/*if (cats.toLowerCase() === 'yes' || cats.toUpperCase() === 'yes' || cats.toLowerCase() === 'y' || cats.toUpperCase() === 'y') {
  alert('Wow , you love cats ');
  sco++
} else {
  alert('Ohh , you arent love cats');
}*/

//console.log(cats);
var cats = prompt('Do you love cats ?');
question(cats,'Wow , you love cats ','Ohh , you arent love cats')
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
    sco++

  }

}

var multinum = ['z', 'a', 'i', 'd'];
var userinput ;
var x = 0 ;
var correctAnswer=false;

while( x<6 && !correctAnswer){
  userinput = prompt('Please guess my name')
  for(var j=0 ; j<multinum.length; j++){
    if (multinum[j]===userinput.toLowerCase()){
      alert('correct answer');
      correctAnswer=true;
      j=j+multinum
      sco++;

      
    }else {
      alert('This unanswer uncorrect')
    }
  }
  
}

 alert('You score  is ' + sco);
