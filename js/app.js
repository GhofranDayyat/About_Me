// 'use strict'
// let userName = prompt('What is your Name?');
// confirm('Welcome ' + userName);
// confirm('Please ' + userName + ' answer yes or No');
// let Q1 = prompt('Are you currently working?');

// switch (Q1.toUpperCase()) {
// case 'YES':
// case 'Y':
//   alert('Good');
//   console.log('Are you currently working?',Q1);
//   break;
// case 'NO':
// case 'N':
//   alert('Good luck in a new jop');
//   console.log('Are you currently working?', Q1);
//   break;
// default:
//   console.log('Are you currently working?', Q1);
//   break;
// }
// let Q2 = prompt('Do you have a laptop?');
// switch (Q2.toUpperCase()) {
// case 'YES':
// case 'Y':
//   alert('Good');
//   console.log('Do you have a laptop?', Q2);
//   break;
// case 'N':
// case 'NO':
//   alert('you Should bay a new one');
//   console.log('Do you have a laptop?', Q2);
//   break;
// default:
//   console.log('Do you have a laptop?', Q2);
//   break;
// }
// let Q3 = prompt('Do you have a software background?');
// switch (Q3.toUpperCase()) {
// case 'YES':
// case 'Y':
//   alert('Good');
//   console.log('Do you have a software background?', Q3);
//   break;
// case 'N':
// case 'NO':
//   alert('It is not necessary');
//   console.log('Do you have a software background?', Q3);
//   break;
// default:
//   console.log('Do you have a software background?', Q3);
//   break;
// }
// let Q4 = prompt('Do you have a programming lean?');
// switch (Q4.toUpperCase()) {
// case 'YES':
// case 'Y':
//   alert('Amazing');
//   console.log('Do you have a programming lean?', Q4);
//   break;
// case 'N':
// case 'NO':
//   alert('I do not advise you to complete');
//   console.log('Do you have a programming lean?', Q4);
//   break;
// default:
//   console.log('Do you have a programming lean?', Q4);
//   break;
// }
// let Q5 = prompt('Do you have a bachelors degree?');
// switch (Q5.toUpperCase()) {
//   case 'YES':
//   case 'Y':
//     alert('It is better');
//     console.log('Do you have a bachelors degree?', Q5);
//     break;
//   case 'N':
//   case 'NO':
//     alert('Good luck');
//     console.log('Do you have a bachelors degree?', Q5);
//     break;
//   default:
//     console.log('Do you have a bachelors degree?', Q5);
//     break;
// }
// confirm('Welcome ' + userName);
// console.log('userName Answer', userName, Q1, Q2, Q3, Q4, Q5);


// confirm('Let\'s play a Guessing Game!');
// let oppo=3;
// let guessingAge=prompt('Guessing my Age');
// while(oppo ) {
//   if(guessingAge==23) {alert('Right answer');
//     break;}
//   while (guessingAge>=24){alert('Too High Guss');

//     oppo-=1;
//     guessingAge=prompt('please try again you have : ' +oppo+ 'remaining!');
//     break;
//   }
//   while(guessingAge<=22) {alert('Too Low Guss');
//     oppo-=1;
//     guessingAge=prompt('please try again you have : ' +oppo+ 'remaining!');
//     break;
//   }

// }
// confirm('my Age is 23 !');
// console.log('user guessing',guessingAge);



// let mealsList=['mansaf', 'kabsa', 'pizza', 'kibbeh', 'maqluba'];
// console.log('list length',mealsList.length);
// console.log(mealsList);
// let attempts=5;
// let userInput =prompt('try to guess the meal');
// let correct = false;
// while(attempts && !correct){
//   for (let i= 0;i<mealsList.length;i++){
//     if (userInput.toLowerCase()===mealsList[i] ) {
//       alert('correct answer!');
//       correct =true;
//       break;
//     }
//     attempts-=1;
//     userInput=prompt('please try again you have : '+attempts+' remaining!');
//   }
// }
// alert('correct answer is ' + ' mansaf '+ ' kabsa '+ ' pizza '+ ' kibbeh '+ ' maqluba');

// console.log('userInput',userInput, );