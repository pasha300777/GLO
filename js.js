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
    money = +prompt('Ваш месячный доход?');
    while (!isNumber(money) || money == ''){ 
      money = +prompt('Ваш месячный доход?');
      }
  }
  while (!isNumber(money)){ 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); 
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

let expenses1, expenses2, amount1, amount2;
let getExpensesMonth = function(){
    for (let i = 0; i < 2; i++) {
    if (i===0){
      expenses1 = prompt('Введите 1-ю обязательную статью расходов?');
      amount1 = +prompt(`Во сколько ${expenses1} обойдется??`);
      while (!isNumber(amount1) || amount1 == ''){ 
        amount1 = +prompt(`Во сколько ${expenses1} обойдется??`);
      }
    } else if (i === 1) {
      expenses2 = prompt('Введите 2-ю обязательную статью расходов?');
      amount2 = +prompt(`Во сколько ${expenses2} обойдется??`);
      while (!isNumber(amount2) || amount2 == ''){
        amount2 = +prompt(`Во сколько ${expenses2} обойдется??`);
      }
    }
  }
  return amount1 + amount2;
};

let expensesAmount = getExpensesMonth (amount1, amount2);
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
