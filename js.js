'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
let accumulatedMonth;
let budgetDay;
let money;
let start = function() {
  do {
    money = prompt('Ваш месячный доход?', '1000');
  } while (!isNumber(money))
};
start()

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: true,
  mission: 10000, 
  period: 12,
  budget: money,
  budgetDay: 0, 
  budgetMonth: 0, 
  expensesMonth: 0,
  asking: function(){
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'FFF,ffff,fff'); 
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    console.log(appData.addExpenses);
    
  },

  getExpensesMonth: function(){
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      let amount;
      appData.expenses[i] = prompt('Введите обязательную статью расходов', 'AAA');
      do {
        amount = prompt('Сколько это будет стоить?', '11');
      } while (!isNumber(amount));
      sum += +amount;
    }
    return sum;
  },
  
  getAccumulatedMonth: function(a, b){
    return a - b;
  },
  getTargetMonth: function(a, b){
    return Math.ceil(a / b);
  },
  getStatusIncome: function(){
    if(budgetDay >= 1200){
      return('У вас высокий уровень дохода');
    }else if(budgetDay <= 1200 && budgetDay >= 600){
      return('У вас средний уровень дохода');
    }else if(budgetDay <= 600 && budgetDay >= 0){
      return('К сожалению у вас уровень дохода ниже среднего');
    }else {
      return('Что то пошло не так');
    }
  },
  

}
appData.asking();


console.log(appData.getStatusIncome());



let expensesAmount = appData.getExpensesMonth ();
console.log('Расходы за месяц: ' + expensesAmount);


accumulatedMonth = appData.getAccumulatedMonth(money, expensesAmount);

if (appData.getTargetMonth(appData.mission, appData.accumulatedMonth) > 0) {
  console.log('Cрок достижения цели в месяцах: '+appData.getTargetMonth(appData.mission, appData.accumulatedMonth));
} else {
  console.log('Цель не будет достигнута');
}

budgetDay = Math.floor(accumulatedMonth / 30);
console.log("Бюджет на день: " + budgetDay);
