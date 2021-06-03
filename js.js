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

// console.log("Период равен "+period+" месяцев, "+"Цель заработать "+ mission +" долларов");
addExpenses.toLowerCase();
let arr = addExpenses.split(',')

let expenses1 = prompt('Введите 1-ю обязательную статью расходов?');
let amount1 = prompt(`Во сколько ${expenses1} обойдется??`);
let expenses2 = prompt('Введите 2-ю обязательную статью расходов?');
let amount2 = prompt(`Во сколько ${expenses2} обойдется??`);

function getExpensesMonth (amount1, amount2) {
  return amount1+amount2;
};
getExpensesMonth();
console.log('Расходы за месяц: ' + getTargetMonth(mission, accumulatedMonth));

console.log(addExpenses);

function getTargetMonth(a, b) {
  return Math.ceil(a/b);
}
console.log('Cрок достижения цели в месяцах: '+getTargetMonth());

function getAccumulatedMonth (a, b) {
  return a-b;
};

accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth);

budgetDay = accumulatedMonth/30;
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

function getTargetMonth(a, b) {
  return Math.ceil(a/b);
}
// console.log(getTargetMonth());

function getAccumulatedMonth (a, b) {
  return a-b;
};
// getAccumulatedMonth();


accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth);
console.log("Месячный бюджет составляет: "+accumulatedMonth);
budgetDay = accumulatedMonth/30;
console.log("Дневной бюджет составляет: "+budgetDay);

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

