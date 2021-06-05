'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
let money;
let income = "freelance";
let addExpenses;
let deposit;
let mission = 10000; 
let period = 12;
let accumulatedMonth;
let budgetDay;

let start = function() {
  do {
    money = +prompt('Ваш месячный доход?', '1000');
    while (!isNumber(money) || money == ''){ 
      money = +prompt('Ваш месячный доход?');
      }
  }
  while (!isNumber(money)){ 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Start, Start, Start'); 
  }
};
start();

deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeOf = function(data) {
  console.log(typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let arr = addExpenses.split(',')
let lowerCased = arr.map(arr => arr.toLowerCase());

let expenses = [];

function getExpensesMonth() {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов', 'Exp');
    sum += +prompt(`Во сколько это обойдется?`, '11');
  }
  console.log(expenses);
  return sum;
};

let expensesAmount = getExpensesMonth ();
console.log('Расходы за месяц: ' + expensesAmount);

console.log(lowerCased);

function getTargetMonth(a, b) {
  return Math.ceil(a / b);
}

function getAccumulatedMonth (a, b) {
  return a - b;
};

accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

function getTargetMonth(a, b) {
  return Math.ceil(a / b);
}

if (getTargetMonth(mission, accumulatedMonth) > 0) {
  console.log('Cрок достижения цели в месяцах: '+getTargetMonth(mission, accumulatedMonth));
} else {
  console.log('Цель не будет достигнута');
}

budgetDay = Math.floor(accumulatedMonth / 30);
console.log("Бюджет на день: "+budgetDay);

let getStatusIncome = function(){
  if(budgetDay >= 1200){
    return('У вас высокий уровень дохода');
  }else if(budgetDay <= 1200 && budgetDay >= 600){
    return('У вас средний уровень дохода');
  }else if(budgetDay <= 600 && budgetDay >= 0){
    return('К сожалению у вас уровень дохода ниже среднего');
  }else {
    return('Что то пошло не так');
  }
};
console.log(getStatusIncome());
