'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
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
    let addFirstExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'FFF,ffff,fff'); 
    appData.addFirstExpenses = addFirstExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    console.log(appData.addFirstExpenses);

    for (let i = 0; i < 2; i++) {

      let question = prompt('Введите обязательную статью расходов № ', + (+i + 1));
      let cash;
      do {
        cash = +prompt('Сколько это будет стоить?', '11');
      } while (!isNumber(cash) || cash <= 0);
        appData.expenses[question] = cash;
    }  
    console.log('expenses: {');
    console.log(Object.keys(appData.expenses)[0] + ': ' + Object.values(appData.expenses)[0]);
    console.log(Object.keys(appData.expenses)[1] + ': ' + Object.values(appData.expenses)[1]);
    console.log('}');
  },
  
  getExpensesMonth: function(){
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    };
    console.log('Расходы за месяц: ' + appData.expensesMonth);
    return appData.expensesMonth;
  },
  
  getBudget: function(){
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    return appData.budgetDay, appData.budgetMonth;
  },

  getTargetMonth: function(){
    let targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
    if (targetMonth > 0) {
      console.log('Cрок достижения цели в месяцах: ' + targetMonth);
    } else {
      console.log('Цель не будет достигнута');
    };
    return targetMonth;
  },

  getStatusIncome: function(){
    if(appData.budgetDay >= 1200){
      return('У вас высокий уровень дохода');
    }else if(appData.budgetDay <= 1200 && appData.budgetDay >= 600){
      return('У вас средний уровень дохода');
    }else if(appData.budgetDay <= 600 && appData.budgetDay >= 0){
      return('К сожалению у вас уровень дохода ниже среднего');
    }else {
      console.log('Что то пошло не та222');
      return('Что то пошло не так');
    };
  },
}

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();


