'use strict';
let userName = prompt('What is your Name?');
    alert('Welcome ' + userName);
    alert('Let\'s play a Guessing Game !');
    alert('Please ' + userName + ' answer yes or No ');
    let grade = 0;

function questionOne() {
    let Q1 = prompt('Do I currently work??');
    switch (Q1.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('Good');
            console.log('Do I currently work??', Q1);
            grade += 1;
            break;
        case 'NO':
        case 'N':
            alert('Uncorrect');
            console.log('Do I currently work??', Q1);
            break;
        default:
            console.log('Do I currently work?', Q1);
            break;
    }
}
questionOne();


function questionTwo() {
    let Q2 = prompt('Do I have a laptop?');
    switch (Q2.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('Good');
            console.log('Do I have a laptop?', Q2);
            grade +=1;
            break;
        case 'N':
        case 'NO':
            alert('Uncorrect');
            console.log('Do I have a laptop?', Q2);
            break;
        default:
            console.log('Do I have a laptop?', Q2);
            break;
    }
}
questionTwo();


function questionThree() {
  let Q3 = prompt('Do I have a software background?');
    switch (Q3.toUpperCase()) {
        case 'N':
         case 'NO':
        alert('Good');
        console.log('Do I have a software background?', Q3);
        break;
        case 'YES':
        case 'Y':
        alert('Uncorrect');
        grade += 1;
        console.log('Do I have a software background?', Q3);
        break;
        default:
         console.log('Do I have a software background?', Q3);
          break;
    }
}
questionThree();

function questionFour() {
    let Q4 = prompt('Do you have a programming lean?');
    switch (Q4.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('Amazing');
            console.log('Do you have a programming lean?', Q4);
            grade += 1;
            break;
        case 'N':
        case 'NO':
            alert('Uncorrect');
            console.log('Do you have a programming lean?', Q4);
            break;
        default:
            console.log('Do you have a programming lean?', Q4);
            break;
    }
}
questionFour();


function questionFive() {
    let Q5 = prompt('Do I have a bachelors degree?');
    switch (Q5.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('GOOD');
            console.log('Do I have a bachelors degree?', Q5);
            grade += 1;
            break;
        case 'N':
        case 'NO':
            alert('Uncorrect');
            console.log('Do I have a bachelors degree?', Q5);
            break;
        default:
            console.log('Do I have a bachelors degree?', Q5);
            break;
    }
}

questionFive();

function questionSix() {
let oppo=3;
let guessingAge=prompt('Can you guess my age?');
while(oppo) {
  oppo-=1;
  if(guessingAge==='23')
  {alert('Right answer');
    grade+=1;
    break;
  }else if(guessingAge>23){
    alert('Too High Guss');
  }else if(guessingAge<23){
    alert('Too Low Guss');

  }
  let res=oppo+1 ;
  guessingAge=prompt('please try again you have : ' +res +' remaining!');

    }
    confirm('my Age is 23 !');
    console.log('user guessing', guessingAge);
}
questionSix();

function questionSeven() {

    let mealsList = ['mansaf', 'kabsa', 'pizza', 'kibbeh', 'maqluba'];
    console.log('list length', mealsList.length);
    console.log(mealsList);
    let attempts = 5;
    let userInput = prompt('try to guess the meal');
    let correct = false;
    while (attempts && !correct) {
        for (let i = 0; i < mealsList.length; i++) {
            if (userInput.toLowerCase() === mealsList[i]) {
                alert('correct answer!');
                correct = true;
                grade += 1;
                break;
            }
            attempts -= 1;
            userInput = prompt('please try again you have : ' + attempts + ' remaining!');
        }
    }
    alert('The  meals list are: ' + mealsList);
    alert('Your garde is: ' + grade + '/7');

    console.log('userInput', userInput);
alert('Welcome ' + userName);
}
questionSeven();