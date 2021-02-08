'use strict'
let userName = prompt('What is your Name?');
confirm('Welcome ' + userName);
confirm('Please ' + userName + ' answer yes or No');
let Q1 = prompt('Are you currently working?');

switch (Q1.toUpperCase()) {
case 'YES':
case 'Y':
  alert('Good');
  console.log('Are you currently working?',Q1);
  break;
case 'NO':
case 'N':
  alert('Good luck in a new jop');
  break;
default:
  console.log('Are you currently working?', Q1);
  break;
}
let Q2 = prompt('Do you have a laptop?');
switch (Q2.toUpperCase()) {
case 'YES':
case 'Y':
  alert('Good');
  break;
case 'N':
case 'NO':
  alert('you Should bay a new one');
  break;
default:
  console.log('Do you have a laptop?', Q2);
  break;
}
let Q3 = prompt('Do you have a software background?');
switch (Q3.toUpperCase()) {
case 'YES':
case 'Y':
  alert('Good');
  break;
case 'N':
case 'NO':
  alert('It is not necessary');
  break;
default:
  console.log('Do you have a software background?', Q3);
  break;
}
let Q4 = prompt('Do you have a programming lean?');
switch (Q4.toUpperCase()) {
case 'YES':
case 'Y':
  alert('Amazing');
  break;
case 'N':
case 'NO':
  alert('I do not advise you to complete');
  break;
default:
  console.log('Do you have a programming lean?', Q4);
  break;
}
let Q5 = prompt('Do you have a bachelors degree?');
switch (Q5.toUpperCase()) {
  case 'YES':
  case 'Y':
    alert('It is better');
    break;
  case 'N':
  case 'NO':
    alert('Good luck');
    break;
  default:
    console.log('Do you have a bachelors degree?', Q5);
    break;
}
confirm('Welcome ' + userName);
console.log('userName Answer', userName, Q1, Q2, Q3, Q4, Q5);
