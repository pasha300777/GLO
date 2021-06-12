const books = document.querySelectorAll('.books'), book = document.querySelectorAll('.book');

console.log(books);
console.log(book);

console.log(book[4]);

book[0].before(book[1]);
book[2].before(book[4]);
book[5].after(book[2]);

// const bgrColor = document.querySelector('.body');
// bgrColor.setAttribute('style', 'background-color:red')
// console.log(bgrColor);

const titleBook = document.getElementsByTagName('H2'[2]);
// titleBook.innerHTML = <span>Книга 3. this и Прототипы Объектов</span>

console.log(titleBook);
document.body.style.backgroundImage = 'url(./image/adv.jpg)';