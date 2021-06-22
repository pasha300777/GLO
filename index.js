'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let startBtn = document.getElementById('start'), 
cancel = document.getElementById('cancel'), 
btnPlus  = document.getElementsByTagName('button'), 
incomePlus = btnPlus[0], 
expensesPlus = btnPlus[1],
depositCheckmark = document.querySelector('#deposit-check'),  
salaryAmount = document.querySelector('.salary-amount'), 
incomeTitle = document.querySelector('input.income-title'),  
incomeItem = document.querySelectorAll('.income-items'),
incomeAmount = document.querySelector('.income-amount'),
dataInputs = document.querySelectorAll('.data'),

additionalIncomeItem = document.querySelectorAll('.additional_income-item'), 
expensesTitle = document.querySelector('input.expenses-title'), 
expensesItems = document.querySelectorAll('.expenses-items'),
expensesAmount = document.querySelector('.expenses-amount'),
additionalExpensesItem = document.querySelector('.additional_expenses-item'), 
targetAmount = document.querySelector('.target-amount'), 
periodSelect = document.querySelector('.period-select'),
titlePeriodAmount = document.querySelector('.period-amount'),

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
    this.budget = +salaryAmount.value;
    
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();
  },
  showResult: function(){
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    periodSelect.addEventListener('input', function(){
      incomePeriodValue.value = appData.calcPeriod();
    });
  },

  // Добавляет три поля в доп. расход
  addExpensesBlock: function(){
    let expensesItems = document.querySelectorAll('.expenses-items');
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    if (expensesItems.length === 3){
      expensesPlus.style.display = 'none';
    }
  },
  
  // Добавляет три поля в доп. доход
  addIncomeBlock: function(){
    let incomeItem = document.querySelectorAll('.income-items');
    let cloneIncomeItem = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
      if (incomeItem.length === 3){
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
    incomeItem.forEach(function(item){
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
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    };
    return this.expensesMonth;
  },
  
  getBudget: function(){
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
    return this.budgetDay, this.budgetMonth;
  },

  getTargetMonth: function(){
    return targetAmount.value / this.budgetMonth;
  },

  calcPeriod: function(){
    return this.budgetMonth * periodSelect.value;
  },
  
  incomeBlock: function(){
    salaryAmount.disabled = true;
    incomeTitle.disabled = true;
    incomeItem.disabled = true;
    incomeAmount.disabled = true;
    additionalIncomeItem[0].disabled = true;
    additionalIncomeItem[1].disabled = true;
    expensesTitle.disabled = true;
    expensesItems.disabled = true;
    expensesAmount.disabled = true;
    additionalExpensesItem.disabled = true;
    targetAmount.disabled = true;
    periodSelect.value = 1;

  },
  
  incomeUnblock: function(){
    salaryAmount.disabled = false;
    incomeTitle.disabled = false;
    incomeItem.disabled = false;
    incomeAmount.disabled = false;
    additionalIncomeItem[0].disabled = false;
    additionalIncomeItem[1].disabled = false;
    expensesTitle.disabled = false;
    expensesItems.disabled = false;
    expensesAmount.disabled = false;
    additionalExpensesItem.disabled = false;
    targetAmount.disabled = false;
    periodSelect.value = 1;
  },

  resetData: function(){
    appData.income = {};
    appData.incomeMonth = 0;
    appData.addIncome = [];
    appData.expenses = {};
    appData.addExpenses = [];
    appData.deposit = false;
    appData.percentDeposit = 0;
    appData.moneyDeposit = 0;
    appData.mission = 0;
    appData.budget = 0;
    appData.budgetDay = 0; 
    appData.budgetMonth = 0; 
    appData.expensesMonth = 0;
    periodSelect.value = 1;
    titlePeriodAmount.textContent = 1;
  },
  
  reset: function(){
    const inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
    incomeItem = document.querySelectorAll('.income-items');
    if (incomeItem.length > 1) {
      for (let i = incomeItem.length - 1; i > 0 ; i--) {      
      incomeItem[i].children[0].value = '';
      incomeItem[i].children[1].value = '';
      incomeItem[i].remove();
      }
    }
    
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length > 1) {
      for (let i = expensesItems.length - 1; i > 0 ; i--) {      
      expensesItems[i].children[0].value = '';
      expensesItems[i].children[1].value = '';
      expensesItems[i].remove();
      }
    }
    appData.resetData()
  },
  
};

startBtn.addEventListener('click', function() {
  appData.start();
  appData.incomeBlock();
  changeBtn();
});
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);

let eventFunc = function(){
    titlePeriodAmount.textContent = periodSelect.value;
};
eventFunc();
periodSelect.addEventListener('input', eventFunc);

let eventPeriodFunc = function(){
  incomePeriodValue.textContent = periodSelect.value;
};
eventPeriodFunc();

salaryAmount.addEventListener('input', btnLock);
startBtn.disabled = true;
function btnLock(){
  if(salaryAmount.value !== ''){
    startBtn.disabled = false;
  }
  else{
    startBtn.disabled = true;
  }  
};


function changeBtn(){
  startBtn.style.display = 'none';
  cancel.style.display = 'block';
}; 

function changeBtn2(){
  cancel.style.display = 'none';
  startBtn.style.display = 'block';
}; 

cancel.addEventListener('click', function(){
  appData.reset();
  appData.incomeUnblock();
  changeBtn2();
});

