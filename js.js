'use strict';
let money = 1000;
let income = "freelance";
let addExpenses = 'Internet, Taxi, Rent'; 
let deposit = true;
let mission = 10000; 
let period = 12;
let budgetDay = money/30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен ("+period+") месяцев, "+"Цель заработать ("+ mission +") долларов");
addExpenses.toLowerCase();
let arr = addExpenses.split(',')
console.log(arr);
console.log(budgetDay);

money = prompt('Ваш месячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
// console.log(money);
console.log(addExpenses);
deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = +prompt('Введите обязательную статью расходов?');
let expenses2 = +prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let amount2 = +prompt('Во сколько это обойдется?');
let budgetMonth = Number(money-expenses1-expenses2-amount1-amount2);
console.log("Месячный бюджет составляет: ("+budgetMonth+")");
period = Math.ceil(mission/budgetMonth);
console.log("Цель будет достигнута за ("+period+") месяцев");
budgetDay =  Math.floor(budgetMonth/30);
console.log("Дневной бюджет составляет: ("+budgetDay+")");
if(budgetDay>=1200){
  console.log('У вас высокий уровень дохода');
}else if(budgetDay<=1200 && budgetDay>=600){
  console.log('У вас средний уровень дохода');
}else if(budgetDay<=600 && budgetDay>=0){
  console.log('К сожалению у вас уровень дохода ниже среднего');
}else {
  console.log('Что то пошло не так');
}

// let num = 266219;
// let str = String(num);
// let arr2 = str.split('');
// let sum = 0;

// for (let i = 0; i < str.length; i++) {
// 	sum = sum + Number(arr2[i]); //Когда меняю + на * то выдает 0
// }

// console.log(sum);




// let num = '266219';
// let arr2 = num.split("");
// let sum =0;
// for(let i=1; i<=num.length; i++){
//     num =num*i;
//     console.log('num is '+num);
    
// }   

// //    console.log(num**3);
// console.log(sum);



// console.log(num[0]);
// console.log(num[1]);
 



