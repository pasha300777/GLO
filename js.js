'use strict';
let money = +prompt('Ваш месячный доход?');
let income = "freelance";
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); 
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 10000; 
let period = 12;
let accumulatedMonth;
let budgetDay;

let showTypeOf = function(data) {
  console.log(typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let arr = addExpenses.split(',')
let lowerCased = arr.map(arr => arr.toLowerCase());

let expenses1 = prompt('Введите 1-ю обязательную статью расходов?');
let amount1 = +prompt(`Во сколько ${expenses1} обойдется??`);
let expenses2 = prompt('Введите 2-ю обязательную статью расходов?');
let amount2 = +prompt(`Во сколько ${expenses2} обойдется??`);

function getExpensesMonth (amount1, amount2) {
  return amount1 + amount2;
};
console.log('Расходы за месяц: ' + getExpensesMonth (amount1, amount2));

console.log(lowerCased);

function getTargetMonth(a, b) {
  return Math.ceil(a / b);
}

function getAccumulatedMonth (a, b) {
  return a - b;
};

accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));
console.log('Cрок достижения цели в месяцах: '+getTargetMonth(mission, accumulatedMonth));

budgetDay = Math.floor(accumulatedMonth / 30);
console.log("Бюджет на день: "+budgetDay);

let getStatusIncome = function(){
  if(budgetDay>=1200){
    return('У вас высокий уровень дохода');
  }else if(budgetDay<=1200 && budgetDay>=600){
    return('У вас средний уровень дохода');
  }else if(budgetDay<=600 && budgetDay>=0){
    return('К сожалению у вас уровень дохода ниже среднего');
  }else {
    return('Что то пошло не так');
  }
};

console.log(getStatusIncome());





