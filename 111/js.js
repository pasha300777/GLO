const books = document.querySelectorAll('.books'); 
const book = document.querySelectorAll('.book');
const advert = document.querySelector('.adv');
const elem = document.getElementsByTagName('li');
const elemH2 = document.getElementsByTagName('h2');
const newElem = document.createElement('li');

console.log(elem);
console.log(newElem);

book[0].before(book[1]);
book[2].before(book[4]);
book[5].after(book[2]);

elem[9].after(elem[12]);
elem[10].after(elem[14]);
elem[15].after(elem[8]);
elem[37].after(elem[45]);
elem[41].after(elem[39]);
elem[44].after(elem[42]);

elemH2[2].textContent = 'Книга 3. this и Прототипы Объектов';

document.body.style.backgroundImage = 'url(./image/adv.jpg)';

advert.remove();

book[2].append(newElem);
newElem.textContent = 'Глава 8: За пределами ES6';
elem[57].after(elem[56]);
