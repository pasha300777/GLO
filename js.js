  'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


let number = 0;
let attempt = 0;
let firstAttempt = alert('Угадай число от 1 до 100', 'Введи число!');

let bott = function(){
  number = Math.ceil(Math.random() * 100);
  return number;
};
bott();
console.log('number is: ' + number + 'attempt is: ' + attempt);

let tryAgain = function(){
  attempt = +prompt('Введи число!', 'Введи число!');
  return tryAgain();
};
tryAgain();
console.log('number is: ' + number + ' attempt is: ' + attempt);


if(attempt === null){
  alert('Игра окончена');
}else if(attempt === number){
  alert('Поздравляю, Вы угадали!!!'); 
  alert('Игра окончена'); 
  console.log(number, attempt);
}else if(!isNumber(attempt)) {
  tryAgain(number);
}else if (attempt < number) {
  alert('Загаданное число больше');
  tryAgain(number);
}else if (attempt > number) {
  alert('Загаданное число меньше');
  tryAgain(number);
}else {
  tryAgain(number);
};                                                                                 