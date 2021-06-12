'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let startBtn = document.getElementById('start'), 
btnPlusIncomeAdd = document.getElementsByTagName('button' [0]), 
btnPlusExpensesAdd = document.getElementsByTagName('button' [1]), 
depositCheckmark = document.querySelector('#deposit-check'), 
resultValue = document.getElementsByClassName('.result'), 
salaryAmount = document.querySelector('.salary-amount'), 
incomeTitle = document.querySelector('input.income-title'), 
incomeAmount = document.querySelector('.income-amount'), 
expensesTitle = document.querySelector('input.expenses-title'), 
expensesAmount = document.querySelector('.expenses-amount'), 
additionalExpensesItem = document.querySelector('.additional_expenses-item'), 
targetAmount = document.querySelector('.target-amount'), 
periodSelect = document.querySelector('.period-select');

console.log(startBtn);
console.log(btnPlusIncomeAdd);
console.log(btnPlusExpensesAdd);
console.log(depositCheckmark);
console.log(resultValue);
console.log(salaryAmount);
console.log(incomeTitle);
console.log(incomeAmount);
console.log(expensesTitle);
console.log(expensesAmount);
console.log(additionalExpensesItem);
console.log(targetAmount);
console.log(periodSelect);

let money;
let start = function() {
  do {
    money = prompt('Ваш месячный доход?', '1000');
  } while (!isNumber(money));
};
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: true,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 10000, 
  period: 12,
  budget: money,
  budgetDay: 0, 
  budgetMonth: 0, 
  expensesMonth: 0,
  asking: function(){
    if (confirm('Усть ли у вас дополнительный заработок?')){
      let itemIncome;
      do {
        itemIncome = prompt('Какой у вас дополнительный заработок?', 'Танцую Jazz');
      } while (isNumber(itemIncome) || itemIncome === '' || itemIncome.trim() === '');
      let cashIncome;
      do {
        cashIncome = prompt('Сколько  в месяц зарабатываете?', 2000);
      } while (!isNumber(cashIncome) || cashIncome <= 0);
        appData.income[itemIncome] = cashIncome;
    }
    let addExpenses;
    do {
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'пить, курить, Гонять балду'); 
    } while (isNumber(addExpenses) || addExpenses === '' || addExpenses.trim() === '');

    appData.addExpenses = addExpenses.split(', ');
    appData.addExpenses = appData.addExpenses.map(item => item.toLowerCase().trim().slice(0, 1).toUpperCase() + item.slice(1));
    console.log(appData.addExpenses.join());

    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      let question;
      do {
        question = prompt('Введите обязательную статью расходов', 'AAA' + (+i + 1));
      } while (isNumber(question) || question === '' || question.trim() === '');
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
      return('Что то пошло не так');
    };
  },

  getInfoDeposit: function(){
    if(appData.deposit) {
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      } while (!isNumber(appData.moneyDeposit) || appData.moneyDeposit <= 0);
      do {
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
      } while (!isNumber(appData.percentDeposit) || appData.percentDeposit <= 0);
    }
  },

  calcSavedMoney: function(){

    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();

console.log(appData.getStatusIncome());

console.log('Возможные расходы: ');
for (let key in appData.addExpenses) {
  console.log('Свойство: ' + key + ', Значение: ' + appData.addExpenses[key]);
};


