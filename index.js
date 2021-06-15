'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = document.getElementById('start'), 
btnPlus  = document.getElementsByTagName('button'), 
incomePlus = btnPlus[0], 
expensesPlus = btnPlus[1],
depositCheckmark = document.querySelector('#deposit-check'),  
salaryAmount = document.querySelector('.salary-amount'), 
incomeTitle = document.querySelector('input.income-title'),  
incomeItems = document.querySelector('.income-items'),

additionalIncomeItem = document.querySelectorAll('.additional_income-item'), 
expensesTitle = document.querySelector('input.expenses-title'), 
expensesItems = document.querySelectorAll('.expenses-items'),
additionalExpensesItem = document.querySelector('.additional_expenses-item'), 
targetAmount = document.querySelector('.target-amount'), 
periodSelect = document.querySelector('.period-select'),
titlePeriodAmount = document.querySelectorAll('.title period-amount'),

budgetMonthValue = document.getElementsByClassName('budget_month-value') [0], 
budgetDayValue = document.getElementsByClassName('budget_day-value') [0], 
expensesMonthValue = document.getElementsByClassName('expenses_month-value') [0], 
additionalIncomeValue = document.getElementsByClassName('additional_income-value') [0], 
additionalExpensesValue = document.getElementsByClassName('additional_expenses-value') [0], 
incomePeriodValue = document.getElementsByClassName('income_period-value') [0], 
targetMonthValue = document.getElementsByClassName('target_month-value') [0];

let appData = {
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: true,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 10000, 
  budget: 0,
  budgetDay: 0, 
  budgetMonth: 0, 
  expensesMonth: 0,

  start: function() {
    if(salaryAmount.value === ''){
      alert('Ошибка, поле "Месячный доход" должно быть заполнено!')
      return;
    }
    appData.budget = +salaryAmount.value;
    console.log('salaryAmount.value: ', salaryAmount.value);

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();
  },
  showResult: function(){
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcPeriod();
  },
  addExpensesBlock: function(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
      if (expensesItems.length === 3){
        expensesPlus.style.display = 'none';
      }
  },

  addIncomeBlock: function(){
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
      if (incomeItems.length === 3){
        incomePlus.style.display = 'none';
      }
  },

  getExpenses: function(){
    expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !== ''){
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getIncome: function(){
    incomeItems.forEach(function(item){
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if(itemIncome !== '' && cashIncome !== ''){
        appData.expenses[itemIncome] = cashIncome;
      }
    });
    for(let key in appData.income){
      appData.incomeMonth += +appData.income[key];
    }
  },
  getAddExpenses: function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if(item !== ''){
        appData.addExpenses.push(item);
      }
    })
  },
  getAddIncome: function(){
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if(item.value !== ''){
        appData.addIncome.push(itemValue);
      }
    });
  },
 
  
  getExpensesMonth: function(){
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    };
    console.log('Расходы за месяц: ' + appData.expensesMonth);
    return appData.expensesMonth;
  },
  
  getBudget: function(){
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    return appData.budgetDay, appData.budgetMonth;
  },

  getTargetMonth: function(){
    return targetAmount.value / appData.budgetMonth;
  },

  // getStatusIncome: function(){
  //   if(appData.budgetDay >= 1200){
  //     return('У вас высокий уровень дохода');
  //   }else if(appData.budgetDay <= 1200 && appData.budgetDay >= 600){
  //     return('У вас средний уровень дохода');
  //   }else if(appData.budgetDay <= 600 && appData.budgetDay >= 0){
  //     return('К сожалению у вас уровень дохода ниже среднего');
  //   }else {
  //     return('Что то пошло не так');
  //   };
  // },

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

  calcPeriod: function(){

    return appData.budgetMonth * periodSelect.value;
  }
};

start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);

let eventFunc = function(){
  console.log('period is: ' + periodSelect.value);
  
  // titlePeriodAmount.innerHTML = periodSelect.value;
  // document.getElementById("1").innerHTML= 'periodSelect.value';
  titlePeriodAmount.textContent = periodSelect.value;

};
eventFunc();

periodSelect.addEventListener('input', eventFunc);
// document.querySelector('.period-select').addEventListener('input', eventFunc);
console.log(periodSelect.value);

console.log('period title is: ' + titlePeriodAmount);





// console.log(appData.getStatusIncome());

// console.log('Возможные расходы: ');
// for (let key in appData.addExpenses) {
//   console.log('Свойство: ' + key + ', Значение: ' + appData.addExpenses[key]);
// };


