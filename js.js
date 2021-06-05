'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


let number;
let rand = function(number){
  number = +confirm('Крутите барабан');
  return Math.random(number);
}
rand(number);
let attempt = +prompt('Угадай число от 1 до 100');
console.log(number, attempt)

if (attempt == number){
  alert('Поздравляю, Вы угадали!!!'); 
  alert('Игра окончена'); 
  console.log(number, attempt)
}else if (attempt < number) {
  +prompt('Загаданное число меньше', 'Введи число!');
} else if (attempt > number) {
  +prompt('Загаданное число больше', 'Введи число!');
}if (!isNumber(attempt)) {
  +prompt('Введи число!', 'Введи число!');
} 






// function randomInteger(min, max) {
// let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand); 
// };
// let number = randomInteger(1, 7)


// function ygaday(){
// let i = 1;
// let d = [];
// while(true){
 
//  let con = +prompt('Угадайте число от 1 до 100', '');

// if( i >= 10 ){
// console.log( `${con} и ${number}` )
// d.push(con);
// alert('10 попытки закончились ...');
// console.log( `Вы вели числа ${ d } правильное число ${number}` );
// break
// };

// if( con == null || con == ''){
//   break 
// } else if( number == con ){
//   alert( `Вы угадали правильное число ${number}` )
//   break
// } else if( con == new Number(con) && con <= 7){
//     d.push(con);
//    ++i
//   console.log( `${con} и ${number}` )
// }; 
// };
// };

// ygaday();